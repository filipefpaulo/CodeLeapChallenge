import { Navigate } from 'react-router-dom';

import { Box } from '../components/Box';
import { FormLogin } from '../components/FormLogin';
import { useSelector } from '../hooks/useRedux';

export function Login() {
  const { username } = useSelector((state) => state.username);
  if (username) return <Navigate to="/" />;

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-300">
      <Box className="w-[500px]">
        <h1 className="text-[22px] font-bold mb-6">Welcome to CodeLeap network!</h1>
        <FormLogin />
      </Box>
    </div>
  );
}
