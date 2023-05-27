import { SignOut } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from '../../hooks/useRedux';
import { setUsername } from '../../redux/features/username.slice';
import { Hero } from '../Hero';

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUsername(''));
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className="flex justify-between bg-defaultBlue px-9 py-7 text-zinc-50">
      <Hero colorMode="light">CodeLeap Network</Hero>
      <button type="button" onClick={handleLogout}>
        <SignOut size={22} weight="bold" />
      </button>
    </div>
  );
}
