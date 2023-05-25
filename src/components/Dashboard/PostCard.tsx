import { dateDiff } from '../../helpers/dateDiff';
import { PostInterface } from '../../interfaces/post.interface';
import { Box } from '../Box';

interface PostCardProps {
  post: PostInterface;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Box className="mt-6 p-0">
      <h1 className="bg-defaultBlue rounded-t-xl p-6 text-[22px] text-zinc-50 font-bold">
        {post.title}
      </h1>
      <div className="text-lg p-6">
        <div className="flex text-zinc-500 justify-between">
          <p className="font-bold  mb-4">@{post.username}</p>
          <p>{dateDiff(post.created_datetime)}</p>
        </div>
        <p>{post.content}</p>
      </div>
    </Box>
  );
}
