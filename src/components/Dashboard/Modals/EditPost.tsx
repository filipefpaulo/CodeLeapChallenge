import { useState } from 'react';

import { editPost } from '../../../actions/codeLeapAPI';
import { useDispatch, useSelector } from '../../../hooks/useRedux';
import { PostInterface } from '../../../interfaces/post.interface';
import { closeModal } from '../../../redux/features/modal.slice';
import { Button } from '../../Button';
import { Hero } from '../../Hero';
import { PostInputs } from '../../Input/PostInputs';

export function EditPost() {
  const { post: oldPost } = useSelector((state) => state.modal);
  const [post, setPost] = useState<Partial<PostInterface>>(oldPost);

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editPost({ ...oldPost, ...post }).then(() => window.location.reload());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Hero colorMode="dark" className="mb-6">
        Edit item
      </Hero>
      <PostInputs post={post} setPost={setPost} />
      <div className="flex justify-end gap-6">
        <Button
          type="button"
          onClick={() => dispatch(closeModal())}
          className="w-32 border border-zinc-600 bg-white capitalize text-zinc-950"
        >
          Cancel
        </Button>
        <Button className="w-32 bg-defaultGreen capitalize" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
