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

export function BannerCarrusel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = ['BannerResveraplant', 'BannerSlimplant', 'BannerGlucosamine2', 'BannerCollagen', 'BannerCoconut', 'BannerColageno', 'BannerGlucosamine', 'BannerMagnesio']

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full overflow-hidden md:mt-4"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-xl">
        {images.map((link, index) => (
          <CarouselItem key={index}>
            <Image src={`/banners/${link}.png`} alt={""} width={1000} height={500} className="w-full md:rounded-xl md:border md:hidden" />
            <Image src={`/banners/${link}.png`} alt={""} width={1400} height={500} className="w-full md:rounded-xl md:border hidden md:flex" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}
