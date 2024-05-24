import Image from 'next/image'
import { Link } from './Link'
import { links } from '@/lib/constants'

export function PrivateEvents() {
  return (
    <div
      
      style={{
        backgroundImage: "url('/images/section-bg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
        // Outros estilos conforme necessário
      }}
      className='flex justify-center items-center relative'
    >
      <div className="absolute top-8 left-8 hidden md:block">
        <Image
          src="/images/logo.png"
          width={200}
          height={80}
          alt="Logo"
        />
      </div>
      <div
        className="flex flex-col gap-8 justify-center items-center text-white py-16 px-8 w-full relative"
      >
        <h1 className="text-6xl font-bold text-center text-green-800">
          Eventos Privados
        </h1>
 
        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full'>

          <div className="relative w-full h-[35vh] overflow-hidden border-4 border-[#244D0C] rounded-md">
          <a
            href={links.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image src="/images/girls.jpg" alt="Happy Hour" layout="fill" objectFit="cover" />
            <div className='absolute inset-0 z-50 grid place-items-center'>
              <span className='text-4xl font-serif font-semibold text-center'>Happy Hour</span>
            </div>
        </a>

          </div>
          <div className="relative w-full h-[28vh] overflow-hidden border-4 border-[#244D0C] rounded-md">
          <a
            href={links.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image src="/images/aniversario.jpg" alt="Aniversários" layout="fill" objectFit="cover" />
            <div className='absolute inset-0 z-50 grid place-items-center'>
              <span className='text-4xl font-serif font-semibold text-center'>Aniversários</span>
            </div>
        </a>

          </div>
          <div className="relative w-full h-[35vh] overflow-hidden border-4 border-[#244D0C] rounded-md">
          <a
            href={links.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image src="/images/grupo.jpg" alt="Eventos Corporativos" layout="fill" objectFit="cover" />
            <div className='absolute inset-0 z-50 grid place-items-center'>
              <span className='text-4xl font-serif font-semibold text-center'>Eventos Corporativos</span>
            </div>
        </a>

          </div>
        </div>

        <Link href={links.whatsapp.link} target="_blank">Agende seu evento</Link>
      </div>
    </div>
  )
}
