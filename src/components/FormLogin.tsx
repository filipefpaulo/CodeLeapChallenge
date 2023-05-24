import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from '../hooks/useRedux';
import { setUsername } from '../redux/features/username.slice';
import { Button } from './Button';
import { Input } from './Input';

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
      <Input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="John Doe"
        labelName="Please enter your username"
      />
      <Button type="submit" className="self-end" disabled={!name}>
        ENTER
      </Button>
    </form>
  );
}
