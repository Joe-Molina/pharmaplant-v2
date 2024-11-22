import React from 'react'
import { infoProducts } from '../info'
import Image from 'next/image'
import { CaruselComponentes } from './components/caruselComponentes'
import { BreadcrumbDemo } from './components/Breadcrumb';

type Params = {
  id: string; // Asegúrate de que el tipo sea acorde con lo que esperas, como string en este caso
};

const page: React.FC<{ params: Params }> = async ({ params }) => {

  const { id } = await params

  const product = infoProducts[Number(id) - 1]

  return (
    <section className='flex flex-col md:flex-row md:justify-evenly md:flex-wrap bg-white mx-2 shadow-sm rounded-md p-3 mt-3 md:mt-0'>
      <BreadcrumbDemo nombre={product.nombre} />
      <div className='w-full flex justify-center md:justify-start md:border-b border-blue-950 mb-5'>
        <Image src={'/logos/pharmalogo.svg'} alt={''} width={100} height={100} className='my-3' />
      </div>

      <div className='w-full md:w-1/3 flex justify-center p-2  md:bg-slate-100 md:hidden border-b border-blue-950'>
        <Image src={product.foto} alt={''} width={100} height={100} />
      </div>

      <div className='flex flex-col  md:w-2/3 md:pr-5'>

        <div className='flex flex-col justify-start w-full my-1 md:my-0 '>
          <p className='font-bold text-xl md:bg-blue-950 md:p-2 md:text-white rounded-md'>{product.nombre}</p>
          <p className='text-neutral-600 md:p-3'>{product.Funcion}</p>
        </div>

        <div className='flex flex-col justify-start w-full my-3 md:my-0 md:p-3'>
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

      <div className='border w-full md:w-1/3 md:flex justify-center items-center p-2 rounded-md  hidden'>
        <Image src={product.foto} alt={''} width={140} height={100} className='h-72' />
      </div>

      <div className='md:w-2/3 md:p-3'>
        <p className='font-bold'>Beneficios</p>
        {
          product.beneficios.map((des, index) => (
            <p className='text-neutral-600' key={index}>* {des}</p>
          ))
        }
      </div>

      <div className='md:w-1/3 my-2'>
        <p className='font-bold md:text-center md:py-2'>Componentes</p>
        <CaruselComponentes product={product.componentes} />
      </div>

    </section>
  )
}

export default page