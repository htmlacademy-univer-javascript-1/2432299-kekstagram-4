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

const openPopup = ({url, description, likes, comments}) => {
  renderBigPic({url, description, likes, comments});
  renderComments(comments);
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


const openViewPopup = ({url, description, likes, comments}) => {
  openPopup({url, description, likes, comments});

  closeBtn.addEventListener('click', onCloseBtnClick);

  document.addEventListener('keydown', onDocumentKeydown);
};

export { openViewPopup };
