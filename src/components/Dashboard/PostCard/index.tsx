import { dateDiff } from '../../../helpers/dateDiff';
import { PostInterface } from '../../../interfaces/post.interface';
import { Box } from '../../Box';
import { PostHeader } from './PostHeader';

export interface PostCardProps {
  post: PostInterface;
  setShowModal: (value: 'idle' | 'delete' | 'edit') => void;
}

export function PostCard({ post, setShowModal }: PostCardProps) {
  return (
    <Box className="mt-6 p-[0px]">
      <PostHeader post={post} setShowModal={setShowModal} />
      <div className="p-6 text-lg">
        <div className="flex justify-between text-zinc-500">
          <p className="mb-4  font-bold">@{post.username}</p>
          <p>{dateDiff(post.created_datetime)}</p>
        </div>
        <p className="hyphens-auto break-words text-justify">{post.content}</p>
      </div>
    </Box>
  );
}
