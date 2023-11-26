import './render.js';

const commentsContainer = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

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

const commentsInit = (data) => {
  if (data) {
    data.forEach((comment) => {
      commentsContainer.appendChild(getCommentTemplate(comment));
    });
  }
};

const renderComments = (comments) => {
  const socialComment = commentsContainer.querySelectorAll('li');
  socialComment.forEach((value) => {
    commentsContainer.removeChild(value);
  });
  commentsInit(comments);
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const renderBigPic = ({url, description, likes, comments}) => {
  bigPicElements.img.src = url;
  bigPicElements.likes.textContent = likes;
  bigPicElements.comments = comments.length;
  bigPicElements.description.textContent = description;
};

export { renderComments, renderBigPic };
