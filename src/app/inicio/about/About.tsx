'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const data = [{
    title: 'RESEÑA HISTÓRICA',
    description: 'Cada historia tiene su propio punto de partida y es así como queremos contar la historia de nuestra empresa. Pharmaplant es una empresa familiar creada en 1998 en la ciudad de Maracay, la cual, viendo el creciente mercado de los productos naturales del momento,aprovecha el impulso del mismo y la necesidad de introducir nuevos productos naturales con materias primas importadas de alta calidad; con esto, innovó en el mercado nacional, poniendoa la disposición del mercado naturista, suplementos herbarios y naturales con altos estándares de calidad.'
  },
  {
    title: 'MISIÓN',
    description: 'Ofrecer productos de calidad, innovando en el mercado nacional de acuerdo a las tendencias y exigencias de nuestros clientes, a fin, de satisfacer calidad, demanda y servicio. Todo esto bajo un ambiente cómodo y una relación GANAR-GANAR con nuestros socios comerciales.'
  },
  {
    title: 'VISIÓN',
    description: 'Nuestra visión a futuro, es llegar a tener independencia total en cuanto a manufactura y creación de nuestros productos, con el objetivo de garantizar un buen servicio a nuestros clientes y la satisfacción en relación beneficio y oferta con el consumidor final.'
  },
  ]

  return (

    <article className='flex flex-col items-center md:flex-row rounded-lg p-4 md:p-0 bg-white mx-2 md:mx-0 mt-5 shadow-sm'>
      <Image src={'/logos/pharmalogo.svg'} alt={''} width={400} height={400} className='w-1/2 rounded-md  md:rounded-r-none md:p-20 md:hidden' />
      <Carousel
        plugins={[plugin.current]}
        className="w-full  md:mt-4"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="rounded-xl">
          {data.map((el, index) => (
            <CarouselItem key={index}>
              <div className=' rounded-b-md md:rounded-l-none md:p-5 flex flex-col items-center justify-center'>
                <h3 className='font-bold text-2xl text-center my-1 mt-5'>{el.title}</h3>
                <p className='font-light text-neutral-500 text-sm tracking-widest text-center'>{el.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden " />
        <CarouselNext className="hidden " />
      </Carousel>
      <Image src={'/logos/pharmalogo.svg'} alt={''} width={400} height={400} className='w-1/2 rounded-md  md:rounded-r-none md:p-20 hidden md:flex' />
    </article>
  )
}