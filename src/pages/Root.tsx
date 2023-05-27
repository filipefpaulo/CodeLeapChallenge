import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useDispatch } from '../hooks/useRedux';
import { setUsername } from '../redux/features/username.slice';

export function Root() {
  const username = localStorage.getItem('username');
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(setUsername(username));
    }
  }, [username, dispatch]);

  if (!username) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/home" />;
}
