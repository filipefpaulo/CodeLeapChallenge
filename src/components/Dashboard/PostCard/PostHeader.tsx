import { useDispatch, useSelector } from '../../../hooks/useRedux';
import { openDeleteModal, openEditModal } from '../../../redux/features/modal.slice';
import { Hero } from '../../Hero';
import Pen from '../../icons/pen.svg';
import Trash from '../../icons/trash.svg';
import { PostCardProps } from '.';

export function PostHeader({ post }: PostCardProps) {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.username);

  console.log(post);

  return (
    <div className="flex justify-between rounded-t-xl bg-defaultBlue p-6 text-[22px] font-bold text-zinc-50">
      <Hero colorMode="light" className="truncate">
        {post.title}
      </Hero>
      {post.username === username && (
        <div className="ml-6 flex gap-8">
          <button onClick={() => dispatch(openDeleteModal(post))}>
            <img src={Trash} alt="Trash symbol to delete the post" />
          </button>
          <button onClick={() => dispatch(openEditModal(post))}>
            <img src={Pen} alt="Pen symbol to edit the post" />
          </button>
        </div>
      )}
    </div>
  );
}
