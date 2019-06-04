const { src, dest, series, parallel, watch } = require('gulp');
const webserver = require('gulp-webserver'); // 启动服务器
const webpackStream = require('webpack-stream'); // 打包
const path = require('path'); // 路径
const sass = require('gulp-sass'); // sass 转义
const proxy = require("http-proxy-middleware");
const del = require('del');


function copyHTML() {
  return src("./*.html")
    .pipe(dest("./dev"));
}
function copylib() {
  return src("./src/lib/**/*")
    .pipe(dest("./dev/lib"));
}

function copyimages() {
  return src('./src/images/**/*')
    .pipe(dest('./dev/images'))
}

function copyicons() {
  return src('./src/icons/**/*')
    .pipe(dest('./dev/icons'))
}
function webServer() {
  return src('./dev')
    .pipe(webserver({
      host: 'localhost',
      livereload: true,
      port:8001,
      open: true,
     

    }));
};
function packjs() {
  return src('./src/**/*')
    .pipe(webpackStream({
      mode: 'development',

      entry: {
        app: ['./src/app.js']
      },

      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dev')
      },

      // 将ES6-ES8 代码转换成 ES5
      module: {
        rules: [
          {
            test: /\.js$/,
            // exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [['@babel/plugin-transform-runtime', {
                  'helpers': false
                }]]
              }
            }
          },
          {
            test: /\.html$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(dest('./dev/scripts'))
}
function packCSS() {
  return src('./src/styles/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./dev/styles'));
}
function clear(target) {
  return function () {
    return del(target);
  }
}

function watcher() {
  watch('./src/lib/**/*', series(clear('./dev/lib'), copylib))
  watch('./src/images/**/*', series(clear('./dev/images'), copyimages))
  watch('./src/icons/**/*', series(clear('./dev/icons'), copyicons))
  watch('./*.html', series(clear('./dev/*.html'), copyHTML))
  watch('./src/styles/**/*', series(packCSS))
  watch(['./src/**/*', '!src/lib/**/*', '!src/icons/**/*', '!src/images/**/*', '!src/styles/**/*'], series(packjs))
}

exports.default = series(parallel(packCSS,copyHTML, packjs, copylib, copyimages, copyicons), webServer, watcher)