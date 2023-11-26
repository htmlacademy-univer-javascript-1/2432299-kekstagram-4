import { getPhotos } from './utils.js';
import { renderPics } from './render.js';

const photos = getPhotos();
renderPics(photos);
