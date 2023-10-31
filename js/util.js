import {getPhotosCount, getIdsNum, getUrlsNum, getAvatarIdsNum, getLikesCount, getDescriptions, getCommentSentences, getCommentatorsNames} from './data.js';

const getRandomInteger = (first, last) => Math.ceil(Math.random() * (last - first + 1) + (first - 1));

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomUniqueNum = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateId = createRandomUniqueNum(getIdsNum().MIN, getIdsNum().MAX);
const generateUrl = createRandomUniqueNum(getUrlsNum().MIN, getUrlsNum().MAX);
const generateCommentId = createRandomUniqueNum(1, 1000);

const createMessage = () => getRandomArrayElement(getCommentSentences());

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(getAvatarIdsNum().MIN, getAvatarIdsNum().MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(getCommentatorsNames()),
});

const createPhotoDescription = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(getDescriptions()),
  likes: getRandomInteger(getLikesCount().MIN, getLikesCount().MAX),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const getPhotos = () => Array.from({length: getPhotosCount()}, createPhotoDescription);

export {getPhotos};
