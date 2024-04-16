import { Link } from './Link'

export function Space() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/section-bg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
      }}
      className="flex items-center"
    >
      <div className="mx-auto grid md:py-0 py-8 grid-cols-1 md:grid-cols-[280px_1fr] gap-14 w-full max-w-6xl px-4">
        <div className="h-[400px] md:h-[600px] md:mx-0 mx-auto w-[200px] md:w-[280px] bg-red-500 rounded-3xl border-[8px] relative border-black">
          <div className="top-0 bg-black rounded-b-3xl mx-auto h-8 w-2/3 flex justify-center items-center gap-1">
            <div className="h-2 bg-gray-400 w-8 rounded-full"></div>
            <div className="h-2 bg-gray-400 w-3 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h2 className="text-7xl font-bold text-green-800">Nosso Espaço</h2>

          <p className="text-[30px] sm:text-[48px] whitespace-normal font-normal text-green-800 leading-[1.5]">
            Em nosso espaço você pode desfrutar de uma atmosfera relaxante à
            beira-mar, Nossa ideia é ser seu refúgio praiano no epicentro da
            cidade de São Paulo, O espaço é ideal para momentos de descontração
            e felicidade.
          </p>

          <Link>Venha conhecer</Link>
        </div>
      </div>
    </div>
  )
}
