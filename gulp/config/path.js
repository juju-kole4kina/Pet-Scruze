import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/styles/`,
    js: `${buildFolder}/scripts/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/pages/*.pug`,
    scss_p: `${srcFolder}/pages/**/*.scss`,
    scss_l: `${srcFolder}/layouts/**/*.scss`,
    js: `${srcFolder}/scripts/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    svg: `${srcFolder}/images/**/*.svg`,
    fonts: `${srcFolder}/fonts/**/*`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.pug`,
    scss: `${srcFolder}/**/*.scss`,
    js: `${srcFolder}/scripts/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`
  },
  clean: buildFolder,
  buildFolder: {},
  srcFolder: {},
  rootFolser: {},
}