import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = `../!HTML`;
const buildFolder = '../'

export const path = {
    build: {
        files: `../`,
        assets: `assets`,
        css: `css`,
        js:`js`,
        images: `img`
    },
    src: {
        files: `../${srcFolder}`,
        assets: `assets`,
        css: `css`,
        js:`js`,
        images: `img`
    },
    watch: {},
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}