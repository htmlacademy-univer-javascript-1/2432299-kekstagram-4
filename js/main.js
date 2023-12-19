import { renderPics } from './render.js';
import { addEditWinOpener } from './form.js';
import { getData } from './api.js';
import { setUploadFormSubmit, closeEditWin, safeCloseEdit } from './form.js';

getData()
  .then((photos) => {
    renderPics(photos) ;
  });
addEditWinOpener();
setUploadFormSubmit(closeEditWin, safeCloseEdit);
