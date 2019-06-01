const { src, dest, series,parallel,watch } = require('gulp');
const webpackStream = require('webpack-stream'); // 打包
const path = require('path'); // 路径
const sass = require('gulp-sass'); // sass 转义
const rev = require('gulp-rev');
function copyHTML() {
  return src("./index.html")
    .pipe(dest("./dist"));
}
function packjs() {
  return src('./src/**/*.js')
    .pipe(webpackStream({
      mode: "production",  // production
      entry: {
        app: './src/app.js'
      },
      output: {
        filename: '[name].js',  // [name] =  app
        path: path.resolve(__dirname, './dist')
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
            test: /\.art$/,
            loader:'string-loader',
          }
        ]
      }
    })
    ) .pipe(dest('./dist/scripts'));
}
function packCss(){
  return src('./src/styles/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./dist/styles'));
}
exports.default = series(parallel(packjs,packCss), copyHTML);
// gulp.task('default',gulp.series('copyHTML','webserver'));
