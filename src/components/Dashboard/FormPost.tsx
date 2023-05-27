import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../../actions/codeLeapAPI';
import { useSelector } from '../../hooks/useRedux';
import { PostInterface } from '../../interfaces/post.interface';
import { Box } from '../Box';
import { Button } from '../Button';
import { Hero } from '../Hero';
import { PostInputs } from '../Input/PostInputs';

export function FormPost() {
  const { username } = useSelector((state) => state.username);
  const navigate = useNavigate();
  const [post, setPost] = useState<Partial<PostInterface>>({});

  const hasUsername = !!username;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (hasUsername) {
      createPost({ ...post, username }).then(() => navigate(0));
    }
  };

  return (
    <Box className="mt-6">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Hero colorMode="dark" className="mb-6">
          {"What's on your mind?"}
        </Hero>
        <PostInputs post={post} setPost={setPost} />
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
