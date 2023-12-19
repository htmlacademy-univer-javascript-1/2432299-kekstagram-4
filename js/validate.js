const HASHTAGS_MAX_COUNT = 5;
const getUploadForm = () => document.querySelector('.img-upload__form');
const getHashtagsInput = () => document.querySelector('.text__hashtags');

const hashtagTemplate = /^#[a-zа-яё0-9]{1,19}$/i;
let hashtags = getHashtagsInput().value.toLowerCase().split(' ');

const pristine = new Pristine(getUploadForm(), {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'error__input'
});

const checkRepeats = () => (new Set(hashtags)).size === hashtags.length;

const checkQuantity = () => hashtags.length <= HASHTAGS_MAX_COUNT;

const checkValidity = () => hashtags.every((el) => hashtagTemplate.test(el)) || getHashtagsInput().value === '';

const isValid = () => pristine.validate();

const areHashtagsValid = () => {
  hashtags = getHashtagsInput().value.toLowerCase().split(' ');
  return checkRepeats() && checkQuantity() && checkValidity();
};

const getErrorMessage = () => {
  if (!checkRepeats()) {
    return 'Хэш-теги повторяются';
  }
  if (!checkQuantity()){
    return `Больше ${HASHTAGS_MAX_COUNT} хэштегов`;
  }
  if (!checkValidity()) {
    return 'Введён невалидный хэштег';
  }
};

pristine.addValidator(getHashtagsInput(), areHashtagsValid, getErrorMessage);

export { isValid, getUploadForm, getHashtagsInput };
