import { openViewPopup } from './popup.js';

const picsStorage = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content;
const imgFilters = document.querySelector('.img-filters');
const defaultSortBtn = document.querySelector('#filter-default');
const randomSortBtn = document.querySelector('#filter-random');
const commentsSortBtn = document.querySelector('#filter-discussed');

const renderPics = (photos, sortType, photosCount) => {
  const picsListFragment = document.createDocumentFragment();
  photos
    .slice()
    .sort(sortType)
    .slice(0, photosCount)
    .forEach(({url, description, likes, comments}) => {
      const picElement = picTemplate.cloneNode(true);
      picElement.querySelector('.picture__img').src = url;
      picElement.querySelector('.picture__img').alt = description;
      picElement.querySelector('.picture__likes').textContent = likes;
      picElement.querySelector('.picture__comments').textContent = comments.length;
      picElement.querySelector('.picture').addEventListener('click', () => {
        openViewPopup({url, description, likes, comments});
      });
      picsListFragment.appendChild(picElement);
    });

  picsStorage.querySelectorAll('.picture').forEach((picture) => {
    picsStorage.removeChild(picture);
  });
  picsStorage.appendChild(picsListFragment);
};

const addFilterButtons = () => imgFilters.classList.remove('img-filters--inactive');

const setDefaultSortClick = (cb) => {
  defaultSortBtn.addEventListener('click', () => {
    defaultSortBtn.classList.add('img-filters__button--active');
    randomSortBtn.classList.remove('img-filters__button--active');
    commentsSortBtn.classList.remove('img-filters__button--active');
    cb();
  });
};

const setRandomSortClick = (cb) => {
  randomSortBtn.addEventListener('click', () => {
    defaultSortBtn.classList.remove('img-filters__button--active');
    randomSortBtn.classList.add('img-filters__button--active');
    commentsSortBtn.classList.remove('img-filters__button--active');
    cb();
  });
};

const setDiscussedSortClick = (cb) => {
  commentsSortBtn.addEventListener('click', () => {
    defaultSortBtn.classList.remove('img-filters__button--active');
    randomSortBtn.classList.remove('img-filters__button--active');
    commentsSortBtn.classList.add('img-filters__button--active');
    cb();
  });
};

export { renderPics, setDefaultSortClick, setDiscussedSortClick, setRandomSortClick, addFilterButtons };
