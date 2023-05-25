import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Dashboard } from '../components/Dashboard';
import { useDispatch, useSelector } from '../hooks/useRedux';
import { fetchPosts } from '../redux/features/posts.slice';

export function Home() {
  const { username } = useSelector((state) => state.username);
  const dispatch = useDispatch();

  if (!username) return <Navigate to="/" />;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="max-w-[800px] m-auto bg-white h-full">
      <Dashboard />
    </div>
  );
}
