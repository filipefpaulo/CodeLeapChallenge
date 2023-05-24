import { FormPost } from './FormPost';
import { Header } from './Header';

export function Dashboard() {
  return (
    <div>
      <Header />
      <div className="px-6">
        <FormPost />
      </div>
    </div>
  );
}
