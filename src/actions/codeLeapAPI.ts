import axios from 'axios';

import { PostInterface } from '../interfaces/post.interface';

const codeLeapAPI = axios.create({ baseURL: 'https://dev.codeleap.co.uk/careers/' });

export async function createPost({ title, username, content }: Partial<PostInterface>) {
  return codeLeapAPI
    .post('', { title, username, content })
    .then((response) => response.data)
    .catch((error) => error);
}

export async function getPosts() {
  return codeLeapAPI
    .get('')
    .then((response) => response.data)
    .catch((error) => error);
}
