import Image from 'next/image'
import { Link } from './Link'
import { links } from '@/lib/constants'

export function Events() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/section-dark-green.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
        // Outros estilos conforme necessário
      }}
    >
      <div
        className="flex flex-col gap-8 justify-center items-center text-white py-16"
        style={{ fontFamily: 'Daydream' }}
      >
        <h1 className="text-6xl font-normal text-center">Eventos e Shows</h1>
        <div className="flex md:flex-row flex-col justify-center items-center gap-8 px-4">
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-3xl md:text-3xl lg:text-5xl text-center font-normal md:leading-[1.5] leading-[1.5] lg:leading-[1.5]">
              De dia, o Villinha Bar é um refúgio de paz e tranquilidade...
            </p>
            <p className="text-3xl md:text-3xl lg:text-5xl text-center font-normal md:leading-[1.5] leading-[1.5] lg:leading-[1.5]">
              Á noite transforma-se em um epicentro de festa e diversão.
              Desfrute de shows ao vivo com os maiores DJs e artistas da cena
              brasileira, garantindo uma experiência inesquecível.
            </p>
          </div>
          <div className="flex md:w-auto w-full flex-col gap-4">
            <div className="flex justify-center items-end gap-4">
              <div className="overflow-hidden relative w-32 h-56 sm:w-48 sm:h-72 rounded-2xl border-4 border-[#244D0C]">
                <Image src="/images/cantor.jpg" fill alt="Turma" />
              </div>
              <div className="overflow-hidden relative w-40 h-36 sm:w-64 sm:h-48 rounded-2xl border-4 border-[#244D0C]">
                <Image src="/images/meninas.jpg" fill alt="Turma" />
              </div>
            </div>
            <div className="overflow-hidden relative w-56 h-40 sm:w-96 sm:h-56 rounded-2xl border-4 border-[#244D0C] mx-auto">
              <Image src="/images/turma.jpg" fill alt="Turma" />
            </div>
          </div>
        </div>
        <Link href={links.whatsapp.link}>Listas</Link>
      </div>
    </div>
  )
}
