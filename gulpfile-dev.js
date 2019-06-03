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
  return src("./src/images/**/*")
    .pipe(dest("./dev/lib"));
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
  return src('./src/**/*.js')
    .pipe(webpackStream({
      mode: "development",  // production
      entry: {
        app: './src/app.js'
      },
      output: {
        filename: '[name].js',  // [name] =  app
        path: path.resolve(__dirname, './dev')
      },
      //将es6-es8的代码转换成es5
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              }
            }
          },
          {
            test: /\.html$/,
            loader: 'string-loader',
          }
        ]
      }
    })
    ).pipe(dest('./dev/scripts'));
}
function packCss() {
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
  watch('./src/lib/**/*', series(clear('./dev/lib'), copylib));
  watch('./images/**/*', series(clear('./dev/images'), copyimages));
  watch("./*.html", series(clear('./dev/*.html'), copyHTML));
  watch("./src/styles/**/*", series(packCss));
  watch("./src/**/*.js", series(packjs));
  watch(["./src/**/*", '!src/lib/**/*', '!src/icons/**/*', '!src/images/**/*', '!src/styles/**/*'], series(packjs));
}


/**
 *  共有任务 与 私有任务
 * 共有任务需要在exprots里显式地去定义
 */
// exports.webServer = series(webServer);  
exports.default = series(parallel(packjs, packCss, copylib, copyimages, copyicons), copyHTML, webServer, watcher);
// gulp.task('default',gulp.series('copyHTML','webserver'));
