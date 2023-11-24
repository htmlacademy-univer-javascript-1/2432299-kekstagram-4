import { getPhotos } from './utils.js';
import { openViewPopup } from './popup.js';
import { renderPics } from './render.js';

const photos = getPhotos();
renderPics(photos);
const pictures = document.querySelectorAll('.picture');
openViewPopup(pictures, photos);
