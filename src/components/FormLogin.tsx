import { useLogin } from '../hooks/useLogin';
import { Button } from './Button';
import { Input } from './Input';

export function FormLogin() {
  const { setUser, handleLogin, user } = useLogin();

  return (
    <form className="flex flex-col" onSubmit={handleLogin}>
      <Input
        type="text"
        value={user}
        onChange={({ target }) => setUser(target.value)}
        placeholder="John Doe"
        labelName="Please enter your username"
      />
      <Button type="submit" className="self-end" disabled={!user}>
        ENTER
      </Button>
    </form>
  );
}
