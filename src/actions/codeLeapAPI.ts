import axios from 'axios';

const codeLeapAPI = axios.create({ baseURL: 'https://dev.codeleap.co.uk/careers/' });

interface Post {
  id: number;
  title: string;
  username: string;
  content: string;
  created_datetime: string;
}

export async function createPost({ title, username, content }: Partial<Post>) {
  return codeLeapAPI
    .post('', { title, username, content })
    .then((response) => response.data)
    .catch((error) => error);
}
