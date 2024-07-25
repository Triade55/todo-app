import AuthButton from '@/components/AuthButton'
import ButtonAuthProps from '@/components/ButtonAuth';
import { getAuthSession } from '@/lib/auth';
import React from 'react'

export default async function page() {
    const session = await getAuthSession();

  return (
    <div className='flex justify-between my-2 items-center'>

      {session && <p className='text-2xl underline capitalize'>{session?.user?.name}</p>}
      <ButtonAuthProps isCo={session ? true : false} />
      {/* Vos autres composants */}
    </div>
  )
}
