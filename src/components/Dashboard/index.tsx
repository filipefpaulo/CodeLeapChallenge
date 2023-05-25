import { useDispatch, useSelector } from '../../hooks/useRedux';
import { fetchPosts } from '../../redux/features/posts.slice';
import { Button } from '../Button';
import { FormPost } from './FormPost';
import { Header } from './Header';
import { PostCard } from './PostCard';

export function Dashboard() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="px-6 flex flex-col">
        <FormPost />
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Button
          type="button"
          className="self-center my-6"
          onClick={() => dispatch(fetchPosts(posts?.length || 0))}
        >
          Load more posts
        </Button>
      </div>
    </div>
  );
}
