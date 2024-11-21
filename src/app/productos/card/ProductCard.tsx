import { Button } from '@/components/ui/button'
import { Share } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CarouselProduct } from './components/carrusel'

interface ProductCardProps {
  nombre: string
  descripcion: string
  link: string
  img: string
  beneficios: string[]
  componentes2: string[]
}


const ProductCard: React.FC<ProductCardProps> = ({ nombre, descripcion, link, img, beneficios, componentes2 }) => {
  return (
    <div className='flex md:flex-col justify-between md:h-96 w-full md:w-64 bg-white p-3 rounded-md shadow-sm'>
      <Image src={img} alt={nombre} width={100} height={100} className='pr-4 h-40 self-center' />
      <section className='flex flex-col h-full justify-between w-full'>
        <article className='md:border-t md:pt-2 w-full overflow-hidden'>
          <h3 className='flex font-bold overflow-hidden'>{nombre.slice(0, 23)}</h3>
          <CarouselProduct descripcion={descripcion} beneficios={beneficios} componentes2={componentes2} />
        </article>
        <article className='flex justify-between items-end'>
          <Link href={link} ><Button className='bg-blue-950'>Mas informacion</Button></Link>
          <Share color="white" size={40} className='bg-blue-950 p-3 rounded-md' />
        </article>
      </section>
    </div>

  )
}

export default ProductCard