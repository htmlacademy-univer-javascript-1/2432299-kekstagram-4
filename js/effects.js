const effects = document.querySelectorAll('.effects__radio');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const uploadPreview = document.querySelector('.img-upload__preview');
const effectValue = document.querySelector('.effect-level__value');

let currentEffect = uploadPreview.classList[1];
let currentEffectName;

noUiSlider.create(slider, {
  range: {
    'min': 0,
    'max': 100
  },
  start: 80,
  step: 1,
  connect: 'lower'
});

const updateSlider = (min, max, step) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max
    },
    start: max,
    step: step,
    connect: 'lower'
  });
};

const onSliderUpdate = () => {
  effectValue.value = slider.noUiSlider.get();
  switch(currentEffectName) {
    case 'chrome':
      uploadPreview.style.filter = `grayscale(${effectValue.value})`;
      break;
    case 'sepia':
      uploadPreview.style.filter = `sepia(${effectValue.value})`;
      break;
    case 'marvin':
      uploadPreview.style.filter = `invert(${effectValue.value}%)`;
      break;
    case 'phobos':
      uploadPreview.style.filter = `blur(${effectValue.value}px)`;
      break;
    case 'heat':
      uploadPreview.style.filter = `brightness(${effectValue.value})`;
      break;
    default:
      uploadPreview.style.filter = '';
      break;
  }
};

const onEffectsClick = (evt) => {
  currentEffectName = evt.target.value;
  if (currentEffectName === 'none') {
    slider.classList.add('hidden');
    sliderContainer.classList.add('hidden');
  }
  else {
    slider.classList.remove('hidden');
    sliderContainer.classList.remove('hidden');
    switch(currentEffectName) {
      case 'chrome':
        updateSlider(0, 1, 0.1);
        break;
      case 'sepia':
        updateSlider(0, 1, 0.1);
        break;
      case 'marvin':
        updateSlider(0, 100, 0.1);
        break;
      case 'phobos':
        updateSlider(0, 3, 0.1);
        break;
      case 'heat':
        updateSlider(1, 3, 0.1);
        break;
    }
  }

  slider.noUiSlider.on('update', onSliderUpdate);
  currentEffect = uploadPreview.classList[1];
};

const addEffectChoose = () => {
  uploadPreview.classList.remove(currentEffect);
  slider.classList.add('hidden');
  sliderContainer.classList.add('hidden');

  effects.forEach((effect) => {
    effect.addEventListener('click', onEffectsClick);
  });
};

const removeEffectsChoose = () => {
  effects.forEach((effect) => {
    effect.removeEventListener('click', onEffectsClick);
  });
};

export { addEffectChoose, removeEffectsChoose };
