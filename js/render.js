const picsStorage = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content;

const picsListFragment = document.createDocumentFragment();

const renderPics = (photos) => {
  photos.forEach(({url, description, likes, comments}) => {
    const picElement = picTemplate.cloneNode(true);
    picElement.querySelector('.picture__img').src = url;
    picElement.querySelector('.picture__img').alt = description;
    picElement.querySelector('.picture__likes').textContent = likes;
    picElement.querySelector('.picture__comments').textContent = comments.length;
    picsListFragment.appendChild(picElement);
  });

  picsStorage.appendChild(picsListFragment);
};

export { renderPics };
