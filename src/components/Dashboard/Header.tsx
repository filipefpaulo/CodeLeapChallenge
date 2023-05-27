import { SignOut } from '@phosphor-icons/react';

import { useLogin } from '../../hooks/useLogin';
import { Hero } from '../Hero';

export function Header() {
  const { handleLogout } = useLogin();

  return (
    <div className="flex justify-between bg-defaultBlue px-9 py-7 text-zinc-50">
      <Hero colorMode="light">CodeLeap Network</Hero>
      <button type="button" onClick={handleLogout}>
        <SignOut size={22} weight="bold" />
      </button>
    </div>
  );
}
