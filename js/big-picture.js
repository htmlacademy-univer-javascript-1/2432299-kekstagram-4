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

const getCommentTemplate = (comment) => `<li class="social__comment">
    <img class="social__picture"
      src=${comment.avatar} alt=${comment.name} width="35" height="35">
    <p class="social__text">${comment.message}</p>
  </li>`;

const commentsInit = (data) => {
  if (data) {
    commentsContainer.insertAdjacentHTML('afterbegin', data.map((comment) => getCommentTemplate(comment)).join(''));
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

const renderBigPic = (photo) => {
  bigPicElements.img.src = photo.url;
  bigPicElements.likes.textContent = photo.likes;
  bigPicElements.comments = photo.comments.length;
  bigPicElements.description.textContent = photo.description;
};

export { renderComments, renderBigPic };
