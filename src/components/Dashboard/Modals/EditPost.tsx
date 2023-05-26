import { useDispatch } from '../../../hooks/useRedux';
import { closeModal } from '../../../redux/features/modal.slice';
import { Button } from '../../Button';
import { Hero } from '../../Hero';
import { usePostInput } from '../../Input/PostInput';

export function EditPost() {
  const dispatch = useDispatch();
  const { post, PostInputs } = usePostInput();

  console.log(post);

  return (
    <>
      <Hero colorMode="dark" className="mb-6">
        Edit item
      </Hero>
      <PostInputs />
      <div className="flex justify-end gap-6">
        <Button
          type="button"
          onClick={() => dispatch(closeModal())}
          className="w-32 border border-zinc-600 bg-white capitalize text-zinc-950"
        >
          Cancel
        </Button>
        <Button className="w-32 bg-defaultGreen capitalize text-zinc-950">Save</Button>
      </div>
    </>
  );
}
