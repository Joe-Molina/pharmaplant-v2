import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const NotiSalud = () => {
  return (
    <section className='mx-2 md:mx-0  md:shadow-sm md:rounded-lg overflow-hidden'>

      <article className='flex flex-col md:flex-row  bg-white md:bg-transparent rounded-lg    p-4 md:p-0'>
        <Image src={'/articulos/ArtAntioxidantes.png'} alt={''} width={400} height={400} className='w-full rounded-md border md:rounded-r-none' />
        <div className='md:bg-white rounded-b-md md:rounded-l-none md:p-5 md:flex md:flex-col'>
          <p className='text-neutral-500 my-2'>26/07/2023</p>
          <h3 className='font-bold text-base'>El poder de los Antioxidantes en nuestra salud</h3>
          <p className='font-light text-neutral-500 text-sm'>Se le conoce como antioxidantes, al grupo de fitoquímicos, enzimas, vitaminas y minerales que ayudan a combatir los radicales libres en nuestro cuerpo. Los radicales libres son los causantes del deterioro de muchas de las estructuras de nuestro cuerpo, ya que dañan las estructuras proteicas, lipicas y ADN de nuestro cuerpo..</p>
          <Button className='bg-blue-950  my-2 w-32'>Leer Articulo</Button>
        </div>
      </article>

    </section>
  )
}

export default NotiSalud