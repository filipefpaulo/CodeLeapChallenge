import { useState } from 'react';

import { useDispatch, useSelector } from '../../hooks/useRedux';
import { fetchPosts } from '../../redux/features/posts.slice';
import { Button } from '../Button';
import { FormPost } from './FormPost';
import { Header } from './Header';
import { DeletePost, EditPost } from './Modals';
import { PostCard } from './PostCard';

export function Dashboard() {
  const [showModal, setShowModal] = useState<'idle' | 'delete' | 'edit'>('idle');

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="flex flex-col px-6">
        <FormPost />
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} setShowModal={setShowModal} />
        ))}
        <Button
          type="button"
          className="my-6 self-center"
          onClick={() => dispatch(fetchPosts(posts?.length || 0))}
        >
          Load more posts
        </Button>
        {showModal === 'edit' && <EditPost setShowModal={setShowModal} />}
        {showModal === 'delete' && <DeletePost />}
      </div>
    </div>
  );
}
