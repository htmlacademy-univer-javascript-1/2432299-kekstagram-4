import { showAlert, showErrorMessage, showSuccessMessage } from './utils.js';

const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => response.json())
  .catch(() => {
    showAlert('Не удалось загрузить данные с сервера');
  });

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    } else {
      showSuccessMessage();
    }
  })
  .catch(() => {
    showErrorMessage();
  });

export { getData, sendData };
