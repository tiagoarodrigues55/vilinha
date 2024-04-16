import Image from 'next/image'
import { Link } from './Link'

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
      className="flex items-center justify-center relative"
    >
      <Image
        src="/images/logo.png"
        width={200}
        height={80}
        alt="Logo"
        className="absolute top-8 left-8"
      />
      <div className="flex lg:py-0 w-full pb-16 pt-40 flex-col max-w-6xl justify-center items-center gap-14 text-green-800 px-4">
        <h2 className="text-7xl font-normal text-center lg:mx-auto">
          Restaurante
        </h2>

        <div className="md:flex grid grid-cols-[160px_1fr] w-full items-center gap-8">
          <div className="flex md:flex-row flex-col-reverse items-center gap-5 w-full max-w-[200px] md:min-w-[450px]">
            <div className="relative w-full h-[120px] md:h-[200px]">
              <Image
                src="/images/burguer.jpg"
                alt="Pasteis"
                className="border-[8px] border-[#244D0C] rounded-[40px]"
                fill
              />
            </div>
            <div className="flex flex-col gap-5 md:gap-8 w-full">
              <div className="relative w-full h-[200px] md:h-[300px]">
                <Image
                  src="/images/pasteis.jpg"
                  alt="Pasteis"
                  className="border-[8px] border-[#244D0C] rounded-[40px]"
                  fill
                />
              </div>
              <div className="relative w-full h-[120px] md:h-[200px] mr-8">
                <Image
                  src="/images/prato.jpg"
                  alt="Pasteis"
                  className="border-[8px] border-[#244D0C] rounded-[40px]"
                  fill
                />
              </div>
            </div>
          </div>
          <p className="text-3xl sm:text-5xl text-center font-normal leading-[1] sm:leading-[1.5]">
            Temos pratos executivos, lanches, porções e o melhor da comida
            brasileira para que você possa se deliciar enquanto aprecia o
            ambiente e uma boa música...
          </p>
        </div>

        <Link>Venha conheceer</Link>
      </div>
    </div>
  )
}