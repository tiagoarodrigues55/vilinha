'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './CarouselShadcn'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function CarouselOne(props: { className?: React.ComponentProps<"div">["className"] }) {
  const images = [
    '/images/burguer.jpg',
    '/images/pasteis.jpg',
    '/images/prato.jpg',
  ]
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className={cn("w-full max-w-6xl mx-4 relative", props.className)}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-full"
          >
            <div className="relative h-[250px] md:h-[380px] object-contain rounded-md overflow-hidden">
              <Image src={src} alt="oi" fill />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
