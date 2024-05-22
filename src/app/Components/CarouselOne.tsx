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
    '/images/comida1.jpg',
    '/images/comida2.jpg',
    '/images/comida3.jpg',
    '/images/comida4.jpg',
    '/images/comida5.jpg',
    '/images/comida6.jpg',
    '/images/comida7.jpg',
    '/images/comida8.jpg',
    '/images/comida9.jpg',
    '/images/comida10.jpg',
    '/images/comida11.jpg',

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
            className="basis-full min-w-0 shrink-0 grow-0 basis-full"
          >
            <div className="relative h-[250px] md:h-[380px] object-contain rounded-md overflow-hidden">
              <Image src={src} alt={src} fill />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
