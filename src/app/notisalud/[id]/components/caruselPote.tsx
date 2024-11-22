import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { infoProducts } from "@/app/productos/info"
import Image from "next/image"
import Link from "next/link"
import { Share } from "lucide-react"

interface CaruselPoteProps {
  potes: string[]
}

export const CarouselPote: React.FC<CaruselPoteProps> = ({ potes }) => {


  return (
    <Carousel className="w-[70%] mx-auto max-w-xs">
      <CarouselContent className="">
        {potes.map((id, index) => (
          <CarouselItem key={index}>
            <div className='flex md:flex-col justify-between md:h-[360px] w-full md:w-64 bg-white p-3 rounded-md shadow-sm hover:scale-105 transition'>
              <Image src={infoProducts[Number(id) - 1].foto} alt={infoProducts[Number(id) - 1].nombre} width={100} height={100} className='pr-4 h-40 self-center' />
              <section className='flex flex-col h-full justify-between w-full'>
                <article className='md:border-t md:pt-2 w-full overflow-hidden'>
                  <h3 className='flex font-bold overflow-hidden'>{infoProducts[Number(id) - 1].nombre.slice(0, 23)}</h3>
                  <p className="text-[12px] h-28">{infoProducts[Number(id) - 1].Funcion}</p>
                </article>
                <article className='flex justify-between items-end'>
                  <Link href={`/productos/${infoProducts[Number(id) - 1].id}`} className='bg-blue-950 hover:bg-blue-900 text-[11px] p-2 px-4 rounded-md text-white'>Mas informacion</Link>
                  <Share color="white" size={30} className='bg-blue-950 hover:bg-blue-900 p-2 rounded-md' />
                </article>
              </section>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}