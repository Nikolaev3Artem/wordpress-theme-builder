import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./prod`;
const srcFolder = `./HTML`;

export const path = {
    theme_name:'Theme-Name', 
    build: {
        files: `${buildFolder}`,
    },
    src: {
        folder: `${srcFolder}`,
        assets: `assets`
    },
    watch: {},
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``

}