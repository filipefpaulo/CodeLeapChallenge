import { Box } from '../../Box';
import { Button } from '../../Button';
import { Hero } from '../../Hero';
import { usePostInput } from '../../Input/PostInput';

interface EditPostProps {
  setShowModal: (value: 'idle' | 'delete' | 'edit') => void;
}

export function EditPost({ setShowModal }: EditPostProps) {
  const { post, PostInputs } = usePostInput();

  console.log(post);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Box className="w-full max-w-[660px]">
        <Hero colorMode="dark">Edit item</Hero>
        <PostInputs />
        <Button
          type="button"
          onClick={() => setShowModal('idle')}
          className="ml-auto mr-4 w-[120px] border border-zinc-600 bg-white capitalize text-zinc-950"
        >
          Cancel
        </Button>
        <Button className="w-[120px] bg-defaultGreen capitalize text-zinc-950">
          Save
        </Button>
      </Box>
    </div>
  );
}
