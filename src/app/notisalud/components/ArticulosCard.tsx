import { Share } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface ProductCardProps {
  id: string
  titulo: string
  foto: string
  articulo: string[]
}



const ArticulosCard: React.FC<ProductCardProps> = ({ titulo, foto, id, articulo }) => {
  return (
    <div className='flex flex-col md:h-[360px] w-full md:w-[280px] bg-white p-3 rounded-md shadow-sm hover:scale-105 transition'>
      <Image src={foto} alt={titulo} width={400} height={400} className='w-100 self-center rounded-md' />

      <section className='flex flex-col h-full justify-between w-full'>

        <article className='md:border-t md:pt-2 w-full overflow-hidden'>
          <h3 className='flex font-bold overflow-hidden md:text-[12px] mt-5 md:mt-0'>{titulo}</h3>

          <p className='text-[12px] text-zinc-600 h-28'>{articulo[0]}</p>

        </article>


        <article className='flex justify-between items-end my-2 md:my-0'>
          <Link href={`/notisalud/${id}`} className='bg-blue-950 hover:bg-blue-900 text-[11px] p-2 px-4 rounded-md text-white'>Leer Articulo</Link>
          <Share color="white" size={30} className='bg-blue-950 hover:bg-blue-900 p-2 rounded-md' />
        </article>

      </section>
    </div>
  )
}

export default ArticulosCard

// interface ProductCardProps {
//   id: string
//   titulo: string
//   foto: string
//   datos: DatosProps[]
//   articulo: string[]
//   potes: string[]

// interface DatosProps {
//   titulo: string
//   descripcion: string
// }
// }