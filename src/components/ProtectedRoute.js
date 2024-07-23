import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/api/auth/signin'); // Redirect to login
  }, [session, status]);

  if (status === 'loading' || !session) {
    return <p>Loading...</p>;
  }

  return children;
}
