import { Navigate } from 'react-router-dom';

import { Box } from '../components/Box';
import { FormLogin } from '../components/FormLogin';
import { Hero } from '../components/Hero';
import { useSelector } from '../hooks/useRedux';

export function Login() {
  const { username } = useSelector((state) => state.username);
  if (username) return <Navigate to="/" />;

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-300">
      <Box className="w-[500px]">
        <Hero colorMode="dark" className="mb-6">
          Welcome to CodeLeap network!
        </Hero>
        <FormLogin />
      </Box>
    </div>
  );
}
