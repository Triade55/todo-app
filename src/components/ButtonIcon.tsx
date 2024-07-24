import Link from 'next/link'
import React from 'react'
interface Props {
    href: string,
    children: React.ReactNode
}
const ButtonIcon = ({href,children}:Props) => {
  return (
    <Link href={href} className=''>
        {children}
    </Link>
  )
}

export default ButtonIcon
