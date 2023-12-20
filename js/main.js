import { renderPics, setDefaultSortClick, setDiscussedSortClick, setRandomSortClick, addFilterButtons } from './render.js';
import { addEditWinOpener } from './form.js';
import { getData } from './api.js';
import { setUploadFormSubmit, closeEditWin, safeCloseEdit } from './form.js';
import { randomSort, sortByComments, debounce } from './utils.js';

const RERENDER_DELAY = 500;

getData()
  .then((photos) => {
    renderPics(photos, () => 0, 25);
    addFilterButtons();
    setDefaultSortClick(debounce(() => renderPics(photos, () => 0, 25), RERENDER_DELAY));
    setRandomSortClick(debounce(() => renderPics(photos, randomSort, 10), RERENDER_DELAY));
    setDiscussedSortClick(debounce(() => renderPics(photos, sortByComments, 25), RERENDER_DELAY));
  });
addEditWinOpener();
setUploadFormSubmit(closeEditWin, safeCloseEdit);
