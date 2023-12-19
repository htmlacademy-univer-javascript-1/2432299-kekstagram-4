const scale = document.querySelector('.scale__control--value');
const increaseScaleButton = document.querySelector('.scale__control--bigger');
const decreaseScaleButton = document.querySelector('.scale__control--smaller');

const getUploadPreview = () => document.querySelector('.img-upload__preview');
const uploadPreview = getUploadPreview();

const increaseScale = () => {
  if (scale.value !== '100%') {
    scale.value = `${parseInt(scale.value.slice(0, -1), 10) + 25}%`;
  }
  uploadPreview.style.transform = `scale(${parseInt(scale.value.slice(0, -1), 10) / 100})`;
};

const decreaseScale = () => {
  if (scale.value !== '25%') {
    scale.value = `${parseInt(scale.value.slice(0, -1), 10) - 25}%`;
  }
  uploadPreview.style.transform = `scale(${parseInt(scale.value.slice(0, -1), 10) / 100})`;
};

const addScaleButtons = () => {
  increaseScaleButton.addEventListener('click', increaseScale);
  decreaseScaleButton.addEventListener('click', decreaseScale);
};

const removeScaleButtons = () => {
  increaseScaleButton.removeEventListener('click', increaseScale);
  decreaseScaleButton.removeEventListener('click', decreaseScale);
  uploadPreview.style.transform = 'scale(100%)';
  scale.value = '100%';
};

export { addScaleButtons, removeScaleButtons };
