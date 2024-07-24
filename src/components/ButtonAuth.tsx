"use client"
import React from 'react'
import { signIn, signOut } from 'next-auth/react';

interface Props {
    isCo ? :boolean
}
export default function ButtonAuthProps({isCo}:Props){
  return (
    <div>
        {isCo ? (
            
            <button onClick={() => signOut()}>Se déconnecter</button>
        ):(
            <button onClick={() => signIn('github')}>Se connecter avec GitHub</button>
        )}

    </div>
  )
}