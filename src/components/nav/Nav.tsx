import Image from 'next/image'
import React from 'react'
import { links } from './links'
import { LinkNav } from './components/navlink'
import { DrawerNav } from './components/Drawer'
import Link from 'next/link'



export const Nav = () => {
  return (
    <header className='flex items-center justify-between bg-white px-6 py-1 shadow-sm h-16 fixed w-full top-0 z-10'>
      <Link href={'/'}><Image src={'/logos/pharmalogo.svg'} alt={'logo'} width={110} height={200} /></Link>
      <DrawerNav />
      <div className=' gap-5 text-neutral-600  hidden md:flex'>
        {
          links.map((link, index) => (
            <LinkNav endpoint={link.link} text={link.text} key={index} />
          ))
        }
      </div>

    </header>
  )
}
