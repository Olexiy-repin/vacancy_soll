var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rigger = require('gulp-rigger');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var mmq = require('gulp-merge-media-queries');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var uglify = require('gulp-uglify-es').default;

// TASK FOR HTML
gulp.task('html', function(){
  return gulp.src('./src/html/index.html')
    .pipe(rigger())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

// All vacancy
gulp.task('all', function(){
  return gulp.src('./src/html/all-vacancy.html')
    .pipe(rigger())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('html-suc', function(){
  return gulp.src('./src/html/success.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

// TASK FOR CSS
gulp.task('css', function(){
  return gulp.src('./src/sass/*.scss')
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(mmq({
      log: true
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

// TASK FOR JS
gulp.task('js', function(){
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// gulp.task('compress-js', function (cb) {
//   pump([
//         gulp.src('./src/js/*.js'),
//         uglify(),
//         gulp.dest('./dist/js/')
//     ],
//     cb
//   );
// });

// TASK FOR FOLDER COMPONENTS
gulp.task('components', function(){
  return gulp.src('./src/sass/components/*.scss')
    .pipe(browserSync.reload({
      stream: true
    }));
});

// TASK FOR IMAGES
gulp.task('img', function(){
  return gulp.src('./src/img/**/*.+(png|gif|svg|jpg)')
    .pipe(imagemin(
      imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
      })
    ))
    .pipe(gulp.dest('./dist/img'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

// TASK FOR FONTS
gulp.task('fonts', function(){
  return gulp.src('./src/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

// TASK FOR DB
gulp.task('db', function() {
    return gulp.src('./src/db/**/*.*')
      .pipe(gulp.dest('./dist/db'))
        .pipe(browserSync.reload({
          stream: true
        }));
});

// TASK FOR WATCH
gulp.task('watch', function(){
  gulp.watch('./src/html/**/*.html', ['html']);
  gulp.watch('./src/html/**/*.html', ['html-suc']);
  gulp.watch('./src/html/**/*.html', ['all']);
  gulp.watch('./src/sass/**/*.scss', ['css']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/sass/components/*.scss', ['components']);
  gulp.watch('./src/img/**/*.*', ['img']);
  gulp.watch('./src/fonts/**/*.*', ['fonts']);
});

// TASK FOR LIVE SERVER
gulp.task('server', function(){
  browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false
    });
});

// DEL TASK
gulp.task('del:dist', function(){
  return del.sync('./dist');
});

// BUILD TASK
gulp.task('build', ['html', 'all', 'html-suc', 'css', 'js', 'img', 'fonts', 'db']);

// START TASK
gulp.task('start', ['del:dist', 'build', 'server', 'watch']);
