import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
interface CaruselProps {
  beneficios: string[]
  componentes2: string[]
  descripcion: string
}

export const CarouselProduct: React.FC<CaruselProps> = ({ componentes2, beneficios, descripcion }) => {
  // const plugin = React.useRef(
  //   Autoplay({ delay: 5000, stopOnInteraction: true })
  // )

  return (
    <Carousel
      // plugins={[plugin.current]}
      className=" md:w-full max-w-xs w-72"
    // onMouseEnter={plugin.current.stop}
    // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="m-0 w-full">

        <CarouselItem className="p-0">
          <Card className="border-none shadow-none m-0">
            <CardContent className="text-[12px] text-neutral-500 p-0">
              <p>{descripcion.slice(84, 220)}</p>
            </CardContent>
          </Card>
        </CarouselItem>


        <CarouselItem className="p-0">
          <Card className="border-none shadow-none m-0">
            <CardContent className="text-[11px] text-neutral-500 p-0">
              <p className="text-black font-bold">Componentes</p>
              {componentes2[0] && <p>* {componentes2[0].slice(0, 70)}</p>}
              {componentes2[1] && <p>* {componentes2[1].slice(0, 70)}</p>}
              {componentes2[2] && <p>* {componentes2[2].slice(0, 70)}</p>}
            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="p-0">
          <Card className="border-none shadow-none m-0">
            <CardContent className="text-[11px] text-neutral-500 p-0">
              <p className="text-black font-bold">Beneficios</p>
              {beneficios[0] && <p>* {beneficios[0].slice(0, 70)}</p>}
              {beneficios[1] && <p>* {beneficios[1].slice(0, 70)}</p>}
              {beneficios[2] && <p>* {beneficios[2].slice(0, 70)}</p>}
            </CardContent>
          </Card>
        </CarouselItem>

      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}