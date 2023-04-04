const BASE_URL = 'https://';
const Route = {
  GET_DATA: 'alex-kabanin.github.io/2130957-kekstagram-28/data/data.json',
  SEND_DATA: '28.javascript.pages.academy/kekstagram/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error();
    });

const getData = () => load(Route.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);

export {getData, sendData};
