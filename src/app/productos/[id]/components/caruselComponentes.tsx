import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CaruselComponentes() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent >
        <CarouselItem className="basis-1/3 w-20 h-20 border">1</CarouselItem>
        <CarouselItem className="basis-1/3 w-20 h-20 border">2</CarouselItem>
        <CarouselItem className="basis-1/3 w-20 h-20 border">3</CarouselItem>
        <CarouselItem className="basis-1/3 w-20 h-20 border">4</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  )
}