"use server"
import { getAuthSession } from '@/lib/auth';
import { signIn, signOut, useSession } from 'next-auth/react';

export default async function  AuthButton() {
  const session = await getAuthSession();

  if (session) {
    return (
      <>
        <p>Connecté en tant que {session?.user?.email}</p>
        <button onClick={() => signOut()}>Se déconnecter</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn('github')}>Se connecter avec GitHub</button>
    </>
  );
}
