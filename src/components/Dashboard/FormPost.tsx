import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../actions/codeLeapAPI';
import { useSelector } from '../../hooks/useRedux';
import { Box } from '../Box';
import { Button } from '../Button';
import { Hero } from '../Hero';
import { Input } from '../Input';

export function FormPost() {
  const { username } = useSelector((state) => state.username);
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });

  const hasUsername = !!username;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (hasUsername) {
      createPost({ ...post, username }).then(() => window.location.reload());
    } else navigate('/');
  };

  return (
    <Box className="mt-6">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Hero colorMode="dark" className="mb-6">
          {"What's on your mind?"}
        </Hero>
        <Input
          type="text"
          labelName="Title"
          placeholder="Hello world"
          value={post.title}
          onChange={({ target }) => setPost({ ...post, title: target.value })}
        />
        <Input
          type="text"
          labelName="Content"
          placeholder="Content here"
          className="pb-11"
          value={post.content}
          onChange={({ target }) => setPost({ ...post, content: target.value })}
        />
        <Button
          type="submit"
          className="self-end"
          disabled={!(post.title && post.content)}
        >
          Create
        </Button>
      </form>
    </Box>
  );
}
