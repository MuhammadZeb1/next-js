
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navber = () => {
  const router = useRouter()
  const names = 2
  return (
    <div>
        <Link href="/user/setting">got yje link</Link>
        <br />
        <button  onClick={()=> router.push(`/user/profile/${names}`)}>go to profile</button>
    </div>
  )
}

export default Navber