import { isEscapeKey } from './utils.js';
import { renderBigPic, renderComments } from './big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const closeBtn = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeViewPopup();
  }
};

const onCloseBtnClick = () => closeViewPopup();

const openPopup = (photo) => {
  renderBigPic(photo);
  renderComments(photo.comments);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeViewPopup() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeBtn.removeEventListener('click', onCloseBtnClick);
}


const openViewPopup = (pictures, photos) => {
  pictures.forEach((picture, index) => {
    picture.addEventListener('click', () => {openPopup(photos[index]);});
  });

  closeBtn.addEventListener('click', onCloseBtnClick);

  document.addEventListener('keydown', onDocumentKeydown);
};

export { openViewPopup };
