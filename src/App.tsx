import { Route, Routes } from 'react-router-dom';

import { Home, Login, Root } from './pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Root />} />
    </Routes>
  );
}
