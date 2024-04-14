'use client'
import Link from 'next/link';
import Image from  'next/image';
import { useAppContext } from '@/app/context/CartData';

const Navbar = () => {
  const {cartItem} = useAppContext()
  return (
    <header className='w-full absolute z-10 bg-gray-200'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image 
          src ="https://assets-global.website-files.com/651562a2e3b9eb8e04e3c6e7/651562a2e3b9eb8e04e3c755_CZR%20logo%20short.svg"
          alt="Ceezer Logo"
          width={40}
          height={18}
          priority={true}
          className='object-contain'
          /> 
        </Link>
        <Link href='/cart'>Cart{cartItem.length ? '(' + cartItem.length + ')' : ''}</Link>
      </nav>
    </header>
  )
}

export default Navbar