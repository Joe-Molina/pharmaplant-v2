'use client'

import React from 'react'
// import { infoProducts } from './info'
import Image from 'next/image'
import { articulos } from './articulos'
import ArticulosCard from './components/ArticulosCard'

function Page() {
  return (
    <div className='pt-5 md:pt-0 w-full'>

      <div className='flex justify-between items-center text-3xl  bg-blue-950 p-4 text-white font-bold mx-2 rounded-md md:mt-0 md:mx-0'>
        <div>
          <h2>NotiSalud</h2>
          <p className='text-[12px] font-light'>Articulos sobre Salud y Bienestar...</p>
        </div>
        <Image src={'/logos/logowhite.svg'} alt={'logo'} width={70} height={70} />
      </div>

      <section className='mx-2 mt-5 flex flex-wrap  gap-5'>

        {
          articulos.map((art, index) => (
            <ArticulosCard titulo={art.titulo} foto={art.foto} articulo={art.articulo} id={art.id} key={index} />
          ))
        }

      </section>

    </div>
  )
}

export default Page