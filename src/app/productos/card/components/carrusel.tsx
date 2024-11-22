import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  // useCarousel,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
interface CaruselProps {
  beneficios: string[]
  componentes2: string[]
  descripcion: string
}

export const CarouselProduct: React.FC<CaruselProps> = ({ componentes2, beneficios, descripcion }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, playOnInit: false, })
  )

  const handleCustomMouseEnter = (jump?: boolean) => {
    plugin.current.play(jump)
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" md:w-full max-w-xs w-72"
      onMouseEnter={() => handleCustomMouseEnter(true)}
      onMouseLeave={plugin.current.stop}
    >
      <CarouselContent className="m-0 w-full">

        <CarouselItem className="p-0">
          <Card className="border-none shadow-none m-0">
            <CardContent className="text-[11px] text-neutral-500 p-0">
              <p>{descripcion.slice(84, 220)}</p>
              <div className="flex items-center w-full justify-end text-black">
                <p>Componentes</p>
                <ChevronRight color="black" size={10} />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>


        <CarouselItem className="p-0">
          <Card className="border-none shadow-none m-0">
            <CardContent className="text-[11px] p-0 ">
              <p className="text-black font-bold">Componentes</p>
              {componentes2[0] && <p>* {componentes2[0].slice(0, 70).toLocaleLowerCase()}</p>}
              {componentes2[1] && <p>* {componentes2[1].slice(0, 70).toLocaleLowerCase()}</p>}
              <p>ver mas ...</p>

              <div className="flex justify-between w-full">
                <div className="flex items-center w-full justify-start text-black">
                  <ChevronLeft color="black" size={10} />
                  <p>Descripcion</p>
                </div>
                <div className="flex items-center w-full justify-end text-black">
                  <p>Beneficios</p>
                  <ChevronRight color="black" size={10} />
                </div>
              </div>

            </CardContent>
          </Card>
        </CarouselItem>

        <CarouselItem className="p-0">
          <Card className="border-none shadow-none m-0">
            <CardContent className="text-[11px] text-neutral-500 p-0 ">
              <p className="text-black font-bold">Beneficios</p>
              {beneficios[0] && <p>* {beneficios[0].slice(0, 40).toLocaleLowerCase()}</p>}
              {beneficios[1] && <p>* {beneficios[1].slice(0, 40).toLocaleLowerCase()}</p>}
              <p>ver mas...</p>
              <div className="flex items-center w-full justify-start text-black">
                <ChevronLeft color="black" size={10} />
                <p>Componentes</p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>

      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}