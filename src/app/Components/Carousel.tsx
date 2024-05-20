import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './CarouselShadcn';
import Image from 'next/image';

interface ImageDimensions {
  src: string;
  width: number;
  height: number;
  adjustedWidth: number;
}

export function CarouselSize() {
  const [imageDimensions, setImageDimensions] = React.useState<ImageDimensions[]>([]);
  const fixedHeight = 300; // Altura fixa em pixels

  React.useEffect(() => {
    const images = [
      '/images/aniversario.jpg',
      '/images/girls.jpg',
      '/images/img1.jpg',
      '/images/img2.jpg',
      '/images/img3.jpg',
      '/images/img4.jpg',
    ];

    const loadImages = async () => {
      const dimensions = await Promise.all(images.map(src => {
        return new Promise<ImageDimensions>((resolve, reject) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => {
            const aspectRatio = img.width / img.height;
            const adjustedWidth = fixedHeight * aspectRatio;
            resolve({
              src,
              width: img.width,
              height: img.height,
              adjustedWidth,
            });
          };
          img.onerror = () => reject(new Error(`Failed to load image ${src}`));
        });
      }));
      setImageDimensions(dimensions);
    };

    loadImages();
  }, []);

  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-full  mx-auto relative px-10"
    >
      <CarouselContent>
        {imageDimensions.map((image, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 md:basis-1/3 px-10" 
          >
            <div className="relative" style={{ width: image.adjustedWidth, height: fixedHeight }}>
              <Image
                src={image.src}
                alt={`Image ${index}`}
                width={image.adjustedWidth}
                height={fixedHeight}
                layout="intrinsic"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
