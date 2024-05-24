'use client'

import Image from 'next/image'
import Header from './Components/header'
import { CarouselSize } from './Components/Carousel'
import { Space } from './Components/Space'
import { Vilinha } from './Components/Vilinha'
import { Restaurant } from './Components/Restaurant'
import { Events } from './Components/Events'
import { PrivateEvents } from './Components/PrivateEvents'
import { BarAndDrinks } from './Components/BarAndDrinks'
import { Location } from './Components/Location'
import { Link } from './Components/Link'
import { links } from '@/lib/constants'

export default function Home() {
  return (
    <div className="font-serif font-semibold" >
      <Header />
      <div className="relative" >
        <video className="w-screen h-4/5" autoPlay loop muted>
          <source src="/images/vilinhavideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl sm:text-8xl font-normal text-center text-white">
            Sua praia no coração de São Paulo!
          </h1>
        </div>
      </div>

      <Space />
      <Vilinha />
      <Restaurant />
      <Events />
      <PrivateEvents />

      <BarAndDrinks />
      <div
        id="fotos"
        style={{
          backgroundImage: "url('/images/section-bg.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
        className="flex items-center justify-center"
      >
        <div className='flex flex-col gap-16 w-full py-8'>
          <h1 className="text-6xl font-normal text-center text-green-800">
            Fotos
          </h1>
          <div className='flex justify-center w-full'>
            <CarouselSize />
          </div>

          <Link href={links.photos}>Fotos</Link>
        </div>
      </div>

      <Location />
      <div className="relative" >
        <div className="w-[160px] sm:block hidden h-[60px] md:w-[200px] md:h-[80px] absolute top-8 left-8 z-50">
          <Image src="/images/logo.png" fill alt="Logo" />
        </div>
        <video className="w-screen" autoPlay loop muted>
          <source src="/images/vilinhavideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-2 justify-center items-center text-white">
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-normal text-center text-white p-4">
            Venha para o Vilinha Bar e celebre a vida da melhor maneira possível!
          </h1>

          <Link href={links.maps}>Venha nos visitar!</Link>
        </div>
      </div>
    </div>
  )
}
