
import { Share } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CarouselProduct } from './components/carrusel'
import { toast } from 'sonner'
import copy from 'copy-to-clipboard';

interface ProductCardProps {
  nombre: string
  descripcion: string
  link: string
  img: string
  beneficios: string[]
  componentes2: string[]
}


const ProductCard: React.FC<ProductCardProps> = ({ nombre, descripcion, link, img, beneficios, componentes2 }) => {


  async function copiarContenido() {
    try {
      copy(`https://pharmaplantca.com${link}`);
      toast("Has copiado la direccion de este producto", {
        description: nombre,
      })
    } catch (err) {
      console.error('Error al copiar: ', err);
      /* Rechazado - fallo al copiar el texto al portapapeles */
    }
  }

  // const copiarContenido = () => navigator.clipboard.writeText(link).then(function() {
  //   toast("Has copiado la direccion de este producto", {
  //     description: nombre,
  //   })
  // }).catch(function(err) {
  //   console.error('Error al copiar el texto: ', err);
  // });

  return (
    <div className='flex md:flex-col justify-between md:h-[360px] w-full md:w-64 bg-white p-3 rounded-md shadow-sm hover:scale-105 transition'>
      <Image src={img} alt={nombre} width={100} height={100} className='pr-4 h-40 self-center' />
      <section className='flex flex-col h-full justify-between w-full'>
        <article className='md:border-t md:pt-2 w-full overflow-hidden'>
          <h3 className='flex font-bold overflow-hidden'>{nombre.slice(0, 23)}</h3>
          <CarouselProduct descripcion={descripcion} beneficios={beneficios} componentes2={componentes2} />
        </article>
        <article className='flex justify-between items-end'>
          <Link href={link} className='bg-blue-950 hover:bg-blue-900 text-[11px] p-2 px-4 rounded-md text-white'>Mas informacion</Link>
          <Share color="white" size={30} className='bg-blue-950 hover:bg-blue-900 p-2 rounded-md' onClick={() => copiarContenido()} />
        </article>
      </section>
    </div>

  )
}

export default ProductCard