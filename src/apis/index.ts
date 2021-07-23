const API_DOMAIN = 'https://jsonplaceholder.typicode.com';

export const fetchComments = () => {
  return fetch(`${API_DOMAIN}/comments`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const fetchPhotos = () => {
  return fetch(`${API_DOMAIN}/photos`, {
    method: 'GET',
  }).then((res) => res.json());
};
