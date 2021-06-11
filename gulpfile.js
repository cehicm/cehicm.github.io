<<<<<<< HEAD
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const babel = require("gulp-babel");
// sass.compiler = require("gulp-dart-sass");

const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");

//Css
function cssTask(cb) {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(gulp.dest("./dist/css"));
  cb();
}

//Browser tasks
function browsersyncServer(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

//Reload on save
function browsersyncReload(cb) {
=======
const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const postscss = require('gulp-postcss');
const terser = require('gulp-terser');
const cssnano = require('cssnano');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin')

//Sass tasks
function scssTask(){
  return src('scss/style.scss', {sourcemaps: true})
  .pipe(sass())
  .pipe(postscss([cssnano]))
  .pipe(dest('dist', {sourcemaps: "."}));
}

//Javascript tasks
function jsTask(){
  return src('js/main.js', {sourcemaps: true})
  .pipe(terser())
  .pipe(dest('dist'), {sourcemaps: "."});
}

//Browser tasks
function browsersyncServer(cb){
  browsersync.init({
    server:{
      baseDir: "."
    }
  })
  cb()
}

//Reload on save
function browsersyncReload(cb){
>>>>>>> 2ebcde68c7965b2ede26f4e0bfbfa3cd49eba61a
  browsersync.reload();
  cb();
}

<<<<<<< HEAD
// Babel
async function babelTask() {
  src("src/js/main.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(terser())
    .pipe(dest("dist/js"));
}

// Watch Task
function watchTask() {
  watch("*html", browsersyncReload);
  watch(
    ["src/scss/**/*.scss", "src/js/**/*.js"],
    series(cssTask, babelTask, browsersyncReload)
  );
}

// Default Gulp Task
exports.default = series(cssTask, babelTask, browsersyncServer, watchTask);
=======
// Watch Task
function watchTask(){
  watch("*html", browsersyncReload) // changes in all html docs
  watch(['scss/**/*.scss', 'js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
  // what we're watching, what we're gona run
}

//Minimize Imgs
function minimizeImg(){
  gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
}


// Default Gulp Task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServer,
  watchTask,
  minimizeImg
);
>>>>>>> 2ebcde68c7965b2ede26f4e0bfbfa3cd49eba61a
