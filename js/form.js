import { isEscapeKey } from './utils.js';
import { disableSubmitButton, getHashtagsInput, getUploadForm } from './validate.js';

const uploadButton = document.querySelector('.img-upload__input');
const editWin = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeEditBtn = document.querySelector('.img-upload__cancel');
const descriptionInput = document.querySelector('.text__description');

const stopInputPropagation = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditWin();
  }
};

function closeEditWin() {
  body.classList.remove('modal-open');
  editWin.classList.add('hidden');
  closeEditBtn.removeEventListener('click', closeEditWin);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadButton.value = '';
  getHashtagsInput().value = '';
  descriptionInput.value = '';
  getUploadForm().removeEventListener('keydown', stopInputPropagation);
}

const openEditWin = () => {
  body.classList.add('modal-open');
  editWin.classList.remove('hidden');
  closeEditBtn.addEventListener('click', closeEditWin);
  document.addEventListener('keydown', onDocumentKeydown);
  getUploadForm().addEventListener('keydown', stopInputPropagation);
  getUploadForm().addEventListener('submit', disableSubmitButton);
};

const addEditWinOpener = () => uploadButton.addEventListener('change', openEditWin);

export { addEditWinOpener };
