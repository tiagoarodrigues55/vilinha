import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-[#244D0B] py-2 sm:items-center">
      <div className="flex items-center justify-between max-w-6xl w-full">
        <div>
          <Image
            alt="Image"
            src="/images/logovilinha.jpg"
            width={128}
            height={96}
          />
        </div>
        <div
          className="flex md:gap-8 gap-4 items-center font-normal font-serif text-xs sm:text-lg md:text-2xl lg:text-4xl text-white"
          style={{ fontFamily: 'Daydream' }}
        >
          <a
            href="#cardapio"
            className="hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md"
          >
            Cardápio
          </a>
          <a
            href="#espaco"
            className="hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md"
          >
            Espaço
          </a>
          <a
            href="#evento"
            className="hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md"
          >
            Evento
          </a>
          <a
            href="#fotos"
            className="hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md"
          >
            Fotos
          </a>
        </div>
      </div>
    </header>
  )
}
