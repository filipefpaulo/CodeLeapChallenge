import { Navigate } from 'react-router-dom';

import { Dashboard } from '../components/Dashboard';
import { useSelector } from '../hooks/useRedux';

export function Home() {
  const { username } = useSelector((state) => state.username);
  console.log(username);

  if (!username) return <Navigate to="/" />;

  return (
    <div className="max-w-[800px] m-auto bg-white h-screen">
      <Dashboard />
    </div>
  );
}
