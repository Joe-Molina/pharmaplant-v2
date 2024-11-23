'use client'

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface ComponentesItem {
  foto: string
  nombre: string
  definicion: string
}

interface Producto {
  componentes:
  | ComponentesItem[] // Array de objetos válidos
  | (ComponentesItem | undefined)[]; // Array con objetos válidos o `undefined`
}


const Component: React.FC<ComponentesItem> = ({ foto, nombre, definicion }) => {

  const [mostrarInfo, setMostrarInfo] = React.useState(false)

  return (
    <>

      {
        mostrarInfo && <CarouselItem className="basis-1/2 h-40  overflow-y-scroll p-3" onClick={() => { setMostrarInfo(!mostrarInfo) }}><p className="border p-3 rounded-sm text-[12px] text-zinc-700">{definicion}</p></CarouselItem>
      }

      {
        !mostrarInfo && <CarouselItem className="basis-1/2 h-40 flex justify-center items-center p-5 flex-col" onClick={() => { setMostrarInfo(!mostrarInfo) }}><div className="h-40 w-40 border flex flex-col justify-center items-center rounded-md"><Image src={foto} alt={""} width={130} height={130} className="rounded-md p-2 w-24" /><p className="font-bold">{nombre}</p></div></CarouselItem>
      }
    </>

  )
}

export const CaruselComponentes: React.FC<Producto> = ({ componentes }) => {

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="">
        {
          componentes.map((p, index) => (

            p ? (
              <Component
                foto={p.foto}
                nombre={p.nombre}
                definicion={p.definicion}
                key={index}
              />
            ) : (
              <div key={index}>Elemento no disponible</div>
            )
          ))
        }

      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  )
}