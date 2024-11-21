'use client'

import React from 'react'
import { infoProducts } from './info'
import Image from 'next/image'
import ProductCard from './card/ProductCard'

function Page() {
  return (
    <div className='pt-5 md:pt-0'>
      <div className='flex justify-between items-center text-3xl  bg-blue-950 p-4 text-white font-bold mx-2 rounded-md md:mt-0 md:mx-0'>
        <h2>Lista de Productos</h2>
        <Image src={'/logos/logowhite.svg'} alt={'logo'} width={70} height={70} />
      </div>

      <section className='mx-2 mt-5 flex flex-wrap justify-evenly gap-5'>
        {
          infoProducts.map((product) => (
            <ProductCard nombre={product.nombre} descripcion={product.Funcion} link={`/productos/${product.id}`} img={product.foto} key={product.id} beneficios={product.beneficios} componentes2={product.componentes2} />
          ))
        }
      </section>

    </div>
  )
}

export default Page