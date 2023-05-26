import { useDispatch, useSelector } from '../../hooks/useRedux';
import { fetchPosts } from '../../redux/features/posts.slice';
import { Button } from '../Button';
import { FormPost } from './FormPost';
import { Header } from './Header';
import { Modals } from './Modals';
import { PostCard } from './PostCard';

export function Dashboard() {
  const { modalState } = useSelector((state) => state.modal);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="flex flex-col px-6">
        <FormPost />
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Button
          type="button"
          className="my-6 self-center"
          onClick={() => dispatch(fetchPosts(posts?.length || 0))}
        >
          Load more posts
        </Button>
        {modalState !== 'idle' && <Modals />}
      </div>
    </div>
  );
}
