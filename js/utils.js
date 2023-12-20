const errorMessage = document.querySelector('.error');
const successMessage = document.querySelector('.success');
const successButton = document.querySelector('.success__button');
const errorButton = document.querySelector('.error__button');

const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const escSuccessMessage = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSuccessMessage();
  }
};

const escSuccessMessageOnClick = (evt) => {
  if (evt.target === successMessage) {
    hideSuccessMessage();
  }
};

const escErrorMessage = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideErrorMessage();
  }
};

const escErrorMessageOnClick = (evt) => {
  if (evt.target === errorMessage) {
    hideErrorMessage();
  }
};

const showSuccessMessage = () => {
  successMessage.classList.remove('hidden');
  successButton.addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', escSuccessMessage);
  document.addEventListener('click', escSuccessMessageOnClick);
};

function hideSuccessMessage () {
  successMessage.classList.add('hidden');
  successButton.removeEventListener('click', hideSuccessMessage);
  document.removeEventListener('keydown', escSuccessMessage);
  document.removeEventListener('click', escSuccessMessageOnClick);
}

const showErrorMessage = () => {
  errorMessage.classList.remove('hidden');
  errorButton.addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', escErrorMessage);
  document.addEventListener('click', escErrorMessageOnClick);
};

function hideErrorMessage () {
  errorMessage.classList.add('hidden');
  errorButton.removeEventListener('click', hideErrorMessage);
  document.removeEventListener('keydown', escErrorMessage);
  document.removeEventListener('click', escErrorMessageOnClick);
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getPhotoRank = (photo) => photo.comments.length;

const sortByComments = (photoA, photoB) => getPhotoRank(photoB) - getPhotoRank(photoA);

const randomSort = () => Math.random() - 0.5;

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, showErrorMessage, showSuccessMessage, showAlert, sortByComments, randomSort, debounce };
