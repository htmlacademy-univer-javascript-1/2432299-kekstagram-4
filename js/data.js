const getPhotosCount = () => 25;
const getIdsNum = () => {
  return {
    MIN: 1,
    MAX: 25
  };
}
const getUrlsNum = () => {
  return {
    MIN: 1,
    MAX: 25
  };
}
const getAvatarIdsNum = () => {
  return {
    MIN: 1,
    MAX: 6,
  };
}
const getLikesCount = () => {
  return {
    MIN: 15,
    MAX: 200,
  };
}
const getDescriptions = () => {
  return [
  'lol',
  'cool',
  'hype',
  'swag'
  ];
}
const getCommentSentences = () => {
  return [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
}
const getCommentatorsNames = () => {
  return [
  'Иван',
  'Ваня',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
  ];
}

export {getPhotosCount, getIdsNum, getUrlsNum, getAvatarIdsNum, getLikesCount, getDescriptions, getCommentSentences, getCommentatorsNames};
