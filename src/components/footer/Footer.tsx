import Image from 'next/image'
import React from 'react'

function Footer() {
  return (


    <div className='w-full flex flex-col md:flex-row md:justify-between md:items-end items-center bg-white p-3 mt-5 '>


      <Image src={'/logos/pharmalogo.svg'} alt={''} width={200} height={200} />


      <section className='text-neutral-700 '>® 2023. Phamaplant Casa de Representación C.A. </section>
      <a href={'https://jodomodev.vercel.app/'} target='_blank' className='text-blue-800 text-sm hover:border-b border-blue-800'>Creado por Joe Molina - JodomoDev</a>
    </div>
  )
}

export default Footer