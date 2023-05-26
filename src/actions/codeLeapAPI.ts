import axios from 'axios';

import { PostInterface } from '../interfaces/post.interface';

const codeLeapAPI = axios.create({ baseURL: 'https://dev.codeleap.co.uk/careers/' });

export async function createPost({ title, username, content }: Partial<PostInterface>) {
  return codeLeapAPI
    .post('', { title, username, content })
    .then((response) => response.data)
    .catch((error) => error);
}

export async function getPosts(offset = 0) {
  return codeLeapAPI
    .get(`?offset=${offset}`)
    .then((response) => response.data)
    .catch((error) => error);
}

export async function editPost({ id, title, username, content }: Partial<PostInterface>) {
  return codeLeapAPI
    .put(`${id}`, { title, username, content })
    .then((response) => response.data)
    .catch((error) => error);
}
