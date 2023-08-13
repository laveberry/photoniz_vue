import axios from "axios";

const port = 8080;

function create(url) {
  const request = Object.assign({
    baseURL: url,
    withCredentials: true, //헤더정보 보내기
    headers: {
      "Content-Type": "application/json"
    },
  });
  const instance = axios.create(request);
  registerInterceptor(instance);
  return instance;
}

function registerInterceptor(instance) {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}

export const request = create(`http://localhost:${port}`);
