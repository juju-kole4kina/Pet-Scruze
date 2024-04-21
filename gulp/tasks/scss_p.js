import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import mediaQery from 'gulp-group-css-media-queries';
import cssnano from 'cssnano';
import webpcss from 'gulp-webpcss';
import postcss from 'gulp-postcss';

const sass = gulpSass(dartSass);

export const scss_p = () => {
  return app.gulp
    .src(app.path.src.scss_p, {
      sourcemaps: true,
    })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    // .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(sass())
    .pipe(mediaQery())
    .pipe(app.plugins.if(
      app.isWebp, webpcss({
        webpClass: '',
        noWebpClass: '.no-webp'
      })
    ))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}