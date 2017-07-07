var gulp = require('gulp');
var sass = require('gulp-sass');
var browsefiry = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
//  https://www.npmjs.com/package/run-sequence    to run all at the same tim


var config = {
  source: './src/',
  dist: './public'
};

var paths = {
  assets: "/assets/",
  html: "**/*.html",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  js: "js/**/*.js",
  mainJS: "js/app.js",
  components: "js/components/**/*.js",
  c1header: "js/components/**/*.js",
  c2loultimo: "js/components/**/*.js",
  c3mundo: "js/components/**/*.js",
  c4tecnologia: "js/components/**/*.js",
  c5educacion: "js/components/**/*.js",
  c6opinion: "js/components/**/*.js",
  c7slide: "js/components/**/*.js",
  c8footer: "js/components/**/*.js",
  c9newsdetails: "js/components/**/*.js",
  img: "img/**/*.png"
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: config.source + paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass,
  js: config.source + paths.assets + paths.js,
  rootJS: config.source + paths.assets + paths.mainJS,
  components: config.source + paths.assets + paths.components,
  rootc1: config.source + paths.assets + paths.c1header,
  rootc2: config.source + paths.assets + paths.c2loultimo,
  rootc3: config.source + paths.assets + paths.c3mundo,
  rootc4: config.source + paths.assets + paths.c4tecnologia,
  rootc5: config.source + paths.assets + paths.c5educacion,
  rootc6: config.source + paths.assets + paths.c6opinion,
  rootc7: config.source + paths.assets + paths.c7slide,
  rootc8: config.source + paths.assets + paths.c8footer,
  rootc9: config.source + paths.assets + paths.c9newsdetails,
  rootImg: config.source + paths.assets + paths.img
};

gulp.task('html', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass", () =>{
  gulp.src(sources.rootSass)
    .pipe(sass({
    outputStyle: "compressed"
  }). on("error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", () => {
  gulp.src([sources.components, sources.rootJS])
    .pipe(concat("new.js"))
    .pipe(browsefiry())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task("components", () => {
  gulp.src([sources.rootc1, sources.rootc2, sources.rootc3, sources.rootc4, sources.rootc5, sources.rootc6, sources.rootc7, sources.rootc8, sources.rootc9])
    .pipe(browsefiry())
    .pipe(gulp.dest(config.dist + paths.assets + "js/components"))
});

gulp.task('img', () =>{
  gulp.src(sources.rootImg).pipe(gulp.dest(config.dist + paths.assets + "img"));
});

// gulp.task("sass-watch", ["sass"], (done) => {
//   browserSync.reload();
//   done();
// });
//
// gulp.task("js-watch", ["js"], (done) => {
//   browserSync.reload();
//   done();
// });
//
// gulp.task("html-watch", ["html"], (done) => {
//   browserSync.reload();
//   done();
// });
//
// gulp.task("components-watch", ["components"], (done) => {
//   browserSync.reload();
//   done();
// });
//
// gulp.task("img-watch", ["img"], (done) => {
//   browserSync.reload();
//   done();
// });
// gulp.task('browserSync', function () {
//     browserSync.init({
//         port: 5000, // you can specify the port here
//               // can't use the same port that nodemon uses.
//         proxy: {
//             target: 'localhost:3006', // original port
//             ws: true // enables websockets
//         }
//     });
// });

// gulp.task("serve", () => {
//   browserSync.init({
//     server:{
//       baseDir:config.dist
//     }
//   });
//   gulp.watch(sources.html,["html-watch"]);
//   gulp.watch(sources.sass, ["sass-watch"]);
//   gulp.watch(sources.js, ["js-watch"]);
//   gulp.watch(sources.components, ["components-watch"]);
//   gulp.watch(sources.rootImg, ["img-watch"]);
// });
