import { isEscapeKey } from './utils.js';
import { isValid, getHashtagsInput, getUploadForm } from './validate.js';
import { addEffectChoose, removeEffectsChoose } from './effects.js';
import { addScaleButtons, removeScaleButtons } from './rescale.js';
import { sendData } from './api.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadButton = document.querySelector('.img-upload__start input[type=file]');
const editWin = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeEditBtn = document.querySelector('.img-upload__cancel');
const descriptionInput = document.querySelector('.text__description');
const uploadForm = getUploadForm();
const uploadPhoto = document.querySelector('.img-upload__preview img');

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

const safeCloseEdit = () => {
  body.classList.remove('modal-open');
  editWin.classList.add('hidden');
  closeEditBtn.removeEventListener('click', closeEditWin);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadForm.removeEventListener('keydown', stopInputPropagation);
  uploadButton.value = '';
  removeScaleButtons();
  removeEffectsChoose();
};

function closeEditWin() {
  descriptionInput.value = '';
  getHashtagsInput().value = '';
  safeCloseEdit();
  isValid();
}

const openEditWin = () => {
  body.classList.add('modal-open');
  editWin.classList.remove('hidden');
  closeEditBtn.addEventListener('click', closeEditWin);
  document.addEventListener('keydown', onDocumentKeydown) ;
  uploadForm.addEventListener('keydown', stopInputPropagation);
  addScaleButtons();
  addEffectChoose();
};

const setUploadFormSubmit = (onSuccess, onError) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isValid()) {
      sendData(new FormData(evt.target))
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            throw new Error();
          }
        })
        .catch(onError);
    }
  });
};

const addEditWinOpener = () => uploadButton.addEventListener('change', () => {
  const file = uploadButton.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((el) => fileName.endsWith(el));
  if (matches) {
    uploadPhoto.src = URL.createObjectURL(file);
  }
  openEditWin();
});

export { addEditWinOpener, setUploadFormSubmit, closeEditWin, safeCloseEdit };
