import React from 'react'
import { infoProducts } from '../info'
import Image from 'next/image'
import { CaruselComponentes } from './components/caruselComponentes'

async function page({params}) {

  const {id} = await params

  const product = infoProducts[Number(id) - 1]

  return (
    <section className='flex flex-col items-center bg-white mx-2 shadow-sm rounded-md p-3'>
      <Image src={'/logos/pharmalogo.svg'} alt={''} width={200} height={200} className='my-3' />
      <div className='border w-full flex justify-center p-2 rounded-md'>
        <Image src={product.foto} alt={''} width={150} height={150} />
      </div>

      <div className='flex flex-col md:flex-row'>

        <div className='flex flex-col justify-start w-full my-3'>
          <p className='font-bold text-xl'>{product.nombre}</p>
          <p className='text-neutral-600'>{product.Funcion}</p>
        </div>

        <div className='flex flex-col justify-start w-full my-3'>
          <div>
            <p className='font-bold'>Descripción</p>
            {
              product.descripcion.map((des, index) => (
                <p className='text-neutral-600' key={index}>* {des}</p>
              ))
            }
          </div>
          <div>
            <p className='font-bold'>Indicaciones</p>
            <p className='text-neutral-600'>{product.indicaciones}</p>
          </div>
        </div>

      </div>

      <div>
        <p className='font-bold'>Beneficios</p>
        {
          product.beneficios.map((des, index) => (
            <p className='text-neutral-600' key={index}>* {des}</p>
          ))
        }
      </div>

      <div className='w-full my-2'>
        <p className='font-bold'>Componentes</p>
        <CaruselComponentes />
      </div>



    </section>
  )
}

export default page