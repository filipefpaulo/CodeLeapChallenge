import { Navigate } from 'react-router-dom';

import { FormLogin } from '../components/FormLogin';
import { useSelector } from '../hooks/useRedux';

export function Login() {
  const { username } = useSelector((state) => state.username);
  console.log(username);

  if (username) return <Navigate to="/" />;

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-300">
      <div className="p-6 w-[500px] m-auto bg-zinc-50 rounded-2xl border-[1px] border-zinc-400">
        <h1 className="text-[22px] font-bold mb-6">Welcome to CodeLeap network!</h1>
        Please enter your username
        <FormLogin />
      </div>
    </div>
  );
}
