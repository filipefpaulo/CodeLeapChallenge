import { useNavigate } from 'react-router-dom';

import { deletePost } from '../../../actions/codeLeapAPI';
import { useDispatch, useSelector } from '../../../hooks/useRedux';
import { closeModal } from '../../../redux/features/modal.slice';
import { Button } from '../../Button';
import { Hero } from '../../Hero';

export function DeletePost() {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.modal);

  const navigate = useNavigate();

  const handleDelete = async () => {
    deletePost(post.id as number).then(() => navigate(0));
  };
  return (
    <>
      <Hero colorMode="dark">Are you sure you want to delete this item?</Hero>
      <div className="mt-10 flex justify-end gap-6">
        <Button
          type="button"
          onClick={() => dispatch(closeModal())}
          className="w-32 border border-zinc-600 bg-white capitalize text-zinc-950"
        >
          Cancel
        </Button>
        <Button
          className="w-32 bg-defaultRed capitalize"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </>
  );
}
