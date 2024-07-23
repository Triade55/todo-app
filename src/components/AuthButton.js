import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Connecté en tant que {session.user.email}</p>
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
