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
  browsersync.reload();
  cb();
}

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