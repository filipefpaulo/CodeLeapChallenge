import { Navigate } from 'react-router-dom';

import { useDispatch } from '../hooks/useRedux';
import { setUsername } from '../redux/features/username.slice';

export function Root() {
  const username = localStorage.getItem('username');

  if (!username) return <Navigate to="/login" />;

  const dispatch = useDispatch();
  dispatch(setUsername(username));

  return <Navigate to="/home" />;
}
