const PHOTOS_COUNT = 25;
const IdsNum = {
  MIN: 1,
  MAX: 25
};
const UrlsNum = {
  MIN: 1,
  MAX: 25
};
const AvatarIdsNum = {
  MIN: 1,
  MAX: 6,
};
const LikesCount = {
  MIN: 15,
  MAX: 200,
};
const DESCRIPTIONS = [
  'lol',
  'cool',
  'hype',
  'swag'
];
const COMMENT_SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENTATORS_NAMES = [
  'Иван',
  'Ваня',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

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

const generateId = createRandomUniqueNum(IdsNum.MIN, IdsNum.MAX);
const generateUrl = createRandomUniqueNum(UrlsNum.MIN, UrlsNum.MAX);
const generateCommentId = createRandomUniqueNum(1, 1000);

const createMessage = () => getRandomArrayElement(COMMENT_SENTENCES);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AvatarIdsNum.MIN, AvatarIdsNum.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(COMMENTATORS_NAMES),
});

const createPhotoDescription = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const getPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhotoDescription);
getPhotos();
