import {getPhotos} from './util.js';

const picsStorage = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content;

const photos = getPhotos();

const picsListFragment = document.createDocumentFragment();

photos.forEach(({url, description, likes, comments}) => {
  const picElement = picTemplate.cloneNode(true);
  picElement.querySelector('.picture__img').src = url;
  picElement.querySelector('.picture__img').alt = description;
  picElement.querySelector('.picture__likes').textContent = likes;
  picElement.querySelector('.picture__comments').textContent = comments.length;
  picsListFragment.appendChild(picElement);
});

picsStorage.appendChild(picsListFragment);
