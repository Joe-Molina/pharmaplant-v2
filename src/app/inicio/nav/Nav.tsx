import Image from 'next/image'
import React from 'react'
import { links } from './links'
import { LinkNav } from './components/navlink'
import { DrawerNav } from './components/Drawer'


export const Nav = () => {
  return (
    <header className='flex items-center justify-between bg-slate-50 px-6 py-1 shadow-sm h-16 md:h-12'>
      <Image src={'/logos/pharmalogo.svg'} alt={''} width={110} height={200} className='hidden md:flex' />
      <Image src={'/logos/pharmalogosm.svg'} alt={''} width={50} height={100} className='h-full md:hidden' />
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