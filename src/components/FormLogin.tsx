import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from '../hooks/useRedux';
import { setUsername } from '../redux/features/username.slice';

export function FormLogin() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitName = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem('username', name);
    dispatch(setUsername(name));

    navigate('/home');
  };

  return (
    <form className="flex flex-col" onSubmit={submitName}>
      <input
        type="text"
        className="mt-2 mb-4 border-[1px] border-zinc-500 px-4 py-2 rounded-lg"
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="John Doe"
      />
      <button
        type="submit"
        className="px-[31px] py-[6px] w-fit bg-defaultBlue rounded-lg font-bold text-zinc-50 self-end disabled:bg-zinc-400 disabled:cursor-not-allowed"
        disabled={!name}
      >
        ENTER
      </button>
    </form>
  );
}
