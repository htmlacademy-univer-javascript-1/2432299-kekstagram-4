import './render.js';

let commentsContainer = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
let currentComments;

const bigPicElements = {
  img: document.querySelector('.big-picture__img').querySelector('img'),
  likes: document.querySelector('.likes-count'),
  comments: document.querySelector('.social__comments'),
  description: document.querySelector('.social__caption')
};

const getCommentTemplate = (comment) => {
  const socialComment = document.createElement('li');
  const commentAvatar = document.createElement('img');
  const commentText = document.createElement('p');
  socialComment.classList.add('social__comment');
  commentAvatar.classList.add('social__picture');
  commentText.classList.add('social__text');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = 35;
  commentAvatar.height = 35;
  commentText.textContent = comment.message;
  socialComment.append(commentAvatar);
  socialComment.append(commentText);
  return socialComment;
};

let startIndex;
let endIndex;

const commentsInit = (data) => {
  endIndex = Math.min(endIndex + 5, data.length);
  startIndex += 5;

  const commsToInit = data.slice(startIndex, endIndex);

  commentsContainer = document.querySelector('.social__comments');

  if (commsToInit) {
    commsToInit.forEach((comment) => {
      commentsContainer.appendChild(getCommentTemplate(comment));
      commentsCount.textContent = `${endIndex} из ${data.length} комментариев`;
    });
  }

  if (endIndex === data.length) {
    commentsLoader.classList.add('hidden');
    startIndex = 0;
  }
};

function loadNextComments() {
  commentsInit(currentComments);
}

const renderComments = (comments) => {
  startIndex = -5;
  endIndex = 0;
  currentComments = comments;
  const socialComments = commentsContainer.querySelectorAll('li');
  socialComments.forEach((value) => {
    commentsContainer.removeChild(value);
  });
  commentsInit(currentComments);
  if (comments.length <= 5) {
    commentsCount.textContent = `${comments.length} из ${comments.length} комментариев`;
    commentsLoader.classList.add('hidden');
  }
  else {
    commentsLoader.classList.remove('hidden');
    commentsCount.classList.remove('hidden');
    commentsCount.textContent = `5 из ${comments.length} комментариев`;
    commentsLoader.addEventListener('click', loadNextComments);
  }
};

const renderBigPic = ({url, description, likes, comments}) => {
  bigPicElements.img.src = url;
  bigPicElements.likes.textContent = likes;
  bigPicElements.comments = comments.length;
  bigPicElements.description.textContent = description;
};

const removeButtonEvent = () => commentsLoader.removeEventListener('click', loadNextComments);

export { renderComments, renderBigPic, removeButtonEvent };
