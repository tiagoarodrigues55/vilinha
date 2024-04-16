import Image from 'next/image'
import { Link } from './Link'

export function Vilinha() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/vilinha.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
        // Outros estilos conforme necessário
      }}
      className="flex items-center justify-center relative"
    >
      <Image
        src="/images/logo.png"
        width={200}
        height={80}
        alt="Logo"
        className="absolute top-8 left-8"
      />
      <div className="flex flex-col justify-center items-center gap-14 text-white px-4">
        <h2 className="mt-24 text-7xl font-normal text-center lg:mx-auto shadow-2xl">
          O Villinha
        </h2>

        <p className="text-3xl sm:text-5xl text-center font-normal max-w-4xl leading-[1.5] sm:leading-[1.5]">
          Buscamos trazer a tranquilidade e aconchego da praia no coração de São
          Paulo. Oferecemos um refúgio urbano com drinks e comifas , uma ótima
          comida e uma atmosfera que remete ao relaxamento à beira-mar. Venha
          viver momentos inesqueciveis no seu pedacinho de praia em plena
          cidade.
        </p>

        <Link>Venha conheceer</Link>
      </div>
    </div>
  )
}
