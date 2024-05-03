import Image from 'next/image'
import { Link } from './Link'
import { links } from '@/lib/constants'

export function Vilinha() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/vilinha.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
        // linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url('/images/section-bg.png')
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
          Com uma atmosfera diferenciada é muito mais do que um bar, uma casa de festas ou um espaço de eventos. 
          Venha viver momentos inesquecíveis no seu pedacinho de praia no coração da cidade
        </p>

        <Link href={links.maps} target="_blank">Venha conheceer</Link>
      </div>
    </div>
  )
}
