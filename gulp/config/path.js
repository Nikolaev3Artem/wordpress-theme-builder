import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./prod`;
const srcFolder = `./HTML`;

export const path = {
    build: {
        files: `${buildFolder}/`,
    },
    src: {
        files: `${srcFolder}/**/*.*`,
    },
    watch: {},
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``

}