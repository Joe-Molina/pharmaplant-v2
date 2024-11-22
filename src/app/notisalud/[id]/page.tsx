import React from 'react'
import Image from 'next/image'
import { BreadcrumbDemo2 } from '@/app/productos/[id]/components/Breadcrumb';
import { articulos } from '../articulos';
import { CarouselPote } from './components/caruselPote';

type Params = {
  id: string; // Asegúrate de que el tipo sea acorde con lo que esperas, como string en este caso
};

const page: React.FC<{ params: Params }> = async ({ params }) => {

  const { id } = await params

  const articulo = articulos[Number(id) - 1]

  return (
    <section className='flex flex-col  md:justify-evenly md:flex-wrap bg-white mx-2 shadow-sm rounded-md p-3 mt-3 md:mt-0'>
      <BreadcrumbDemo2 nombre={articulo.titulo} />
      <Image src={'/logos/pharmalogo.svg'} alt={''} width={100} height={100} className='my-3' />
      <Image src={articulo.foto} alt={''} width={1200} height={300} className='md:h-80  md:object-none rounded-md' />

      <div className='flex flex-col md:flex-row w-full mt-5'>
        <section className='md:w-2/3'>
          <h1 className='font-bold text-xl'>{articulo.titulo}</h1>

          {
            articulo.articulo.map((art, index) => (
              <p key={index} className='text-[12px] text-zinc-600'>{art}<br /><br /></p>
            ))
          }

          {
            articulo.datos && articulo.datos.map((art, index) => (
              <div key={index} className='text-[12px] my-2'>
                {art?.titulo && <p className='font-bold'>{art.titulo}</p>}
                {art?.descripcion && <p className='text-zinc-600'>{art.descripcion}</p>}
              </div>
            ))
          }
        </section>

        <article className='w-full md:w-1/3 sticky top-0 '>
          <h4 className='text-xl font-bold'>Recomendaciones</h4>
          <CarouselPote potes={articulo.potes} />
        </article>

      </div>

    </section>
  )
}

export default page