import Image from 'next/image'
import { Link } from './Link'

export function PrivateEvents() {
  return (
    <div
      id="evento"
      style={{
        backgroundImage: "url('/images/section-bg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
        // Outros estilos conforme necessário
      }}
    >
      <div
        className="flex flex-col gap-8 justify-center items-center text-white py-16 px-4"
        style={{ fontFamily: 'Daydream' }}
      >
        <h1 className="text-6xl font-bold text-center text-green-800">
          Eventos Privados
        </h1>
        <div className="md:grid flex flex-col-reverse w-full max-w-6xl mx-auto md:grid-cols-[350px_1fr] items-center gap-8 px-4">
          <div className="flex flex-col w-full md:flex-col gap-2">
            <div className="relative w-full h-56 overflow-hidden border-4 border-[#244D0C] rounded-[40px]">
              <Image src="/images/aniversario.jpg" alt="Aniversário" fill />
            </div>
            <div className="flex flex-row gap-4 w-full mt-4">
              <div className="relative md:mt-0 -mt-4 h-40 sm:h-48 w-full overflow-hidden border-4 border-[#244D0C] rounded-[40px]">
                <Image src="/images/girls.jpg" alt="Aniversário" fill />
              </div>
              {/* <div className="relative md:hidden block w-full max-w-[200px] sm:min-w-[250px] md:min-w-full h-56 overflow-hidden border-4 border-[#244D0C] rounded-[40px]">
                <Image src="/images/aniversario.jpg" alt="Aniversário" fill />
              </div> */}
              <div className="relative md:mt-0 -mt-4 h-40 w-full overflow-hidden border-4 border-[#244D0C] rounded-2xl">
                <Image src="/images/grupo.jpg" alt="Aniversário" fill />
              </div>
            </div>
          </div>
          <p className="text-3xl sm:text-5xl text-center font-normal text-[#244D0C]">
            O Villinha Bar é o cenário ideal para todos os seus eventos, seja um
            animado happy hour, uma comemoração de aniversário ou um evento
            corporativo. Estamos de portas abertas para transformar suas
            ocasiões especiais em momentos inesquecíveis.
          </p>
        </div>
        <Link>Agende seu evento</Link>
      </div>
    </div>
  )
}
