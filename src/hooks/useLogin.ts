import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setUsername } from '../redux/features/username.slice';
import { useDispatch } from './useRedux';

export function useLogin() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('username', user);
    dispatch(setUsername(user));
    navigate('/');
  };

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.removeItem('username');
    dispatch(setUsername(null));
    navigate('/');
  };

  return { handleLogin, handleLogout, setUser, user };
}
