"use client"
import React from 'react'
import { signIn, signOut } from 'next-auth/react';
import { GitGraphIcon, Github, GithubIcon, LogInIcon, LogOutIcon } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
    isCo ? :boolean
}
export default function ButtonAuthProps({isCo}:Props){
  return (
    <>
        {isCo ? (
              <Button onClick={() => signOut()} variant="destructive" className='gap-1'>
                 Se déconnecter
                <LogOutIcon/>
              </Button>
        ):(
          <div className='flex justify-between'>
            <Button onClick={() => signIn('github')} variant="success" className='flex gap-1'>Se connecter avec GitHub
            <LogInIcon/>
            </Button>
          </div>

        )}

    </>
  )
}