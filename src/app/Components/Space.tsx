import { links } from '@/lib/constants'
import { Link } from './Link'

export function Space() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/section-bg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela,
      }}
      className="flex items-center"
      id="espaco"
    >
      <div id="video" className="mx-auto grid items-center md:py-0 py-8 grid-cols-1 md:grid-cols-[280px_1fr] gap-14 w-full max-w-6xl px-4">
        <div className="h-[400px] md:h-[600px] md:mx-0 mx-auto w-[200px] md:w-[280px] rounded-3xl border-[8px] border-black relative overflow-hidden">
          <div className="bg-black relative rounded-b-3xl mx-auto h-8 w-2/3 flex justify-center items-center gap-1 z-50">
            <div className="h-2 bg-gray-400 w-8 rounded-full"></div>
            
            <div className="h-2 bg-gray-400 w-3 rounded-full"></div>

          </div>
          <video 
            autoPlay
            loop
            muted
            className='absolute object-fill top-0 bottom-0 w-full h-full'
          >
            <source src="/images/welcome.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col gap-12">
          <h2 className="text-7xl font-bold text-green-800">Nosso Espaço</h2>

          <p className="text-[30px] sm:text-[48px] whitespace-normal font-normal text-green-800 leading-[1.5]">
            Seu refúgio praiano no epicentro de São Paulo, O espaço é ideal para momentos de diversão em uma atmosfera relaxante à beira-mar.
          </p>

          <Link href={links.maps} target="_blank">Venha conhecer</Link>
        </div>
      </div>
    </div>
  )
}
