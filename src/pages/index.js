"use client"
import { useSession } from 'next-auth/react';
import AuthButton from '../components/AuthButton';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Todo List</h1>
      <AuthButton />
      {session && <p>Bienvenue, {session?.user.name}</p>}
      {/* Vos autres composants */}
    </div>
  );
}
