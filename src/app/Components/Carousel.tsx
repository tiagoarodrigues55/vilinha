import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './CarouselShadcn'
import Image from 'next/image'

interface ImageDimensions {
  src: string;
  width: number;
  height: number;
}

export function CarouselSize() {
  const [imageDimensions, setImageDimensions] = React.useState<ImageDimensions[]>([])

  React.useEffect(() => {
    const images = [
      '/images/aniversario.jpg',
      '/images/Logo.jpg',
      '/images/girls.jpg',
    ]

    const loadImages = async () => {
      const dimensions = await Promise.all(images.map(src => {
        return new Promise<ImageDimensions>((resolve, reject) => {
          const img = new window.Image()
          img.src = src
          img.onload = () => {
            resolve({
              src,
              width: img.width,
              height: img.height
            })
          }
          img.onerror = () => reject(new Error(`Failed to load image ${src}`))
        })
      }))
      setImageDimensions(dimensions)
    }

    loadImages()
  }, [])

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-6xl mx-4 relative"
    >
      <CarouselContent>
        {imageDimensions.map((image, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/3"
          >
            <div className="relative">
              <Image 
                src={image.src} 
                alt={`Image ${index}`} 
                width={image.width} 
                height={image.height} 
                layout="intrinsic" 
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
