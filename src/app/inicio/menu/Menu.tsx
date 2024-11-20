import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Menu = () => {
  return (
    <div className="grid grid-cols-4 gap-y-5 md:gap-3 md:h-96 md:max-h-96 m-3 md:my-4 md:mx-0">
      <Link className="col-span-4 md:col-span-2 md:row-span-4 md:mr-2 rounded-md flex md:flex-col items-center justify-between md:justify-evenly px-5 bg-white shadow-sm hover:bg-blue-950 hover:bg-opacity-10 transition ..." href={'/productos'}>
        <span className='text-3xl text-neutral-700'>Productos</span>
        <Image src={'/icons/collagen.png'} alt={''} width={200} height={200} className=' h-32 md:h-72 h w-auto py-2 ' />
      </Link>
      <Link href={'/notisalud'} className="col-span-4 md:col-span-2 md:row-span-2 rounded-md flex items-center justify-between  px-5 md:px-10 bg-white shadow-sm hover:bg-blue-950
hover:bg-opacity-10 ...">
        <div className='text-3xl text-neutral-700 flex flex-col justify-center py-3 h-full md:justify-around'>
          <div>
            <p>NotiSalud</p>
            <p className='text-sm text-neutral-500 '>Lee nuestros increibles articulos...</p>
          </div>
          <Button className='bg-blue-950 hidden md:flex md:mt-3 md:h-10 w-40'>Ver Mas</Button>
        </div>
        <Image src={'/icons/notisalud.svg'} alt={''} width={200} height={200} className=' h-32 w-auto py-2' />
      </Link>
      <Link href={'/about'} className="col-span-4 md:col-span-2 md:row-span-2 rounded-md flex items-center justify-between  px-5 md:px-10 bg-white shadow-sm hover:bg-blue-950
hover:bg-opacity-10 ...">
        <div className='text-3xl text-neutral-700 flex flex-col justify-center py-3 h-full md:justify-around'>
          <div>
            <p>Sobre Nosotros</p>
            <p className='text-sm text-neutral-500'>Conoce nuestra historia...</p>
          </div>
          <Button className='bg-blue-950 hidden md:flex md:mt-3 md:h-10 w-40 '>Ver Mas</Button>
        </div>
        <Image src={'/icons/pharmalogosm.svg'} alt={'logo'} width={200} height={200} className=' h-32 w-auto py-2' />
      </Link>
    </div >
  )
}
