import { useSelector } from '../../../hooks/useRedux';
import { Box } from '../../Box';
import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';

export function Modals() {
  const { modalState } = useSelector((state) => state.modal);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800 bg-opacity-80">
      <Box className="w-[80%] max-w-[660px]">
        {modalState === 'edit' && <EditPost />}
        {modalState === 'delete' && <DeletePost />}
      </Box>
    </div>
  );
}

export { DeletePost, EditPost };
