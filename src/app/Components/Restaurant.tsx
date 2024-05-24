import Image from 'next/image'
import { Link } from './Link'
import { CarouselOne } from './CarouselOne'

export function Restaurant() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/section-bg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
      }}
      className="flex items-center justify-center relative py-8 px-2"
    >
      <Image
        src="/images/logo.png"
        width={200}
        height={80}
        alt="Logo"
        className="absolute top-8 left-8"
      />
      <div className="flex lg:py-0 w-full pb-16 pt-40 flex-col max-w-6xl justify-center items-center gap-14 text-green-800 px-4">
        <h1 className="text-7xl font-normal text-center lg:mx-auto px-2">
          Restaurante
        </h1>

        <div className="flex-col sm:flex-row flex w-full md:items-center gap-8">
          <CarouselOne className='mx-0' />
          <p className="text-3xl sm:text-5xl text-center font-normal leading-[1] sm:leading-[1.5]">
              O villinha tem pratos executivos, lanches, porções e o melhor da comida brasileira para você aproveitar o máximo de sua experiência.
          </p>
        </div>

        <Link href="https://acuolina.com/pt/villinhabar">Cardápio</Link>
      </div>
    </div>
  )
}
