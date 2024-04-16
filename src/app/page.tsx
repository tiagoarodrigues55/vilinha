'use client'

import Image from 'next/image'
import Header from './Components/header'
import { CarouselSize, EmblaCarousel } from './Components/Carousel'
import { Space } from './Components/Space'
import { Vilinha } from './Components/Vilinha'
import { Restaurant } from './Components/Restaurant'
import { Events } from './Components/Events'
import { PrivateEvents } from './Components/PrivateEvents'
import { BarAndDrinks } from './Components/BarAndDrinks'
import { Location } from './Components/Location'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Daydream' }}>
      {/* Link Google Fonts */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap"
        rel="stylesheet"
      /> */}
      <Header />
      {/* Div video */}
      <div className="relative" style={{ fontFamily: 'Daydream' }}>
        <video className="w-screen h-4/5" controls autoPlay loop muted>
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
        id="carrosel"
        style={{
          backgroundImage: "url('/images/section-bg.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Altura mínima para cobrir toda a tela
          // Outros estilos conforme necessário
        }}
        className="flex items-center justify-center"
      >
        <CarouselSize />
      </div>

      <Location />
      {/* Div video */}
      <div className="relative" style={{ fontFamily: 'Daydream' }}>
        <div className="w-[160px] sm:block hidden h-[60px] md:w-[200px] md:h-[80px] absolute top-8 left-8 z-50">
          <Image src="/images/logo.png" fill alt="Logo" />
        </div>
        <video className="w-screen" controls autoPlay loop muted>
          <source src="/images/vilinhavideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl sm:text-8xl font-normal text-center text-white px-2">
            Sua praia no coração de São Paulo!
          </h1>
        </div>
      </div>
      {/* <div className="relative min-h-screen" style={{ fontFamily: 'Daydream' }}>
        <div className="md:w-[200px] md:h-[80px] absolute top-8 left-8">
          <Image src="/images/logo.png" fill alt="Logo" />
        </div>

        <video className="w-screen h-screen" controls autoPlay loop muted>
          <source src="/images/vilinhavideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl sm:text-7xl font-normal text-center text-white">
            Venha para o vilinha bar e celebre a vida da melhor maneira
            possivel!
          </h1>
        </div>
      </div> */}
    </div>
  )
}
