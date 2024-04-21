import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  isWebp: !process.argv.includes('--nowebp')
}

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss_l } from './gulp/tasks/scss_l.js';
import { scss_p } from './gulp/tasks/scss_p.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { oftToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss_l);
  gulp.watch(path.watch.scss, scss_p);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(oftToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss_l, scss_p, js, images));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);