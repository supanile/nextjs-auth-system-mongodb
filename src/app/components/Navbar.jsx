"use client"

import React from 'react'
import Link from 'next/link'
import NextLogo from '../../../public/next.svg'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

function Navbar({ session }) {
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <Link href="/" className='flex items-center space-x-2'>
            <Image src={NextLogo} width={100} height={100} alt='nextjs logo' />
          </Link>
          <ul className='flex items-center space-x-4'>
            {!session ? (
              <>
                <li><Link href="/login" className='text-gray-600 hover:text-gray-800 transition-colors duration-300'>Login</Link></li>
                <li><Link href="/register" className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300'>Register</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/welcome" className='text-gray-600 hover:text-gray-800 transition-colors duration-300'>Profile</Link></li>
                <li><button onClick={() => signOut()} className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-300'>Logout</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar