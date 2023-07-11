import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = `./!HTML`;
const theme_name = 'Theme-Name';

export const path = {
    theme_name:`${theme_name}`, 
    build: {
        files: `../${theme_name}`,
        assets: `assets`,
        css: `css`,
        js:`js`,
        images: `img`
    },
    src: {
        files: `../${theme_name}/${srcFolder}`,
        assets: `assets`,
        css: `css`,
        js:`js`,
        images: `img`
    },
    watch: {},
    clean: theme_name,
    buildFolder: theme_name,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}