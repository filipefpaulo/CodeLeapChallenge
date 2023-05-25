import { useSelector } from '../../hooks/useRedux';
import { FormPost } from './FormPost';
import { Header } from './Header';
import { PostCard } from './PostCard';

export function Dashboard() {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div>
      <Header />
      <div className="px-6">
        <FormPost />
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
