import { getPhotos } from './utils.js';
import { renderPics } from './render.js';
import { addEditWinOpener } from './form.js';

const photos = getPhotos();
renderPics(photos);
addEditWinOpener();
