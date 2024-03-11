import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-[#244D0B] sm:items-center">

      <div className="flex justify-center sm:justify-between w-11/12 h-26 ">
      <div>
        <img src="/images/logovilinha.jpg" className="w-34 h-24" />
      </div>
      <div className="hidden sm:flex items-center font-normal font-serif text-4xl text-white" style={{ fontFamily: 'Daydream'}}>
          <a href="#cardapio" className="mx-4 transition-transform duration-300 hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md">Cardápio</a>
          <a href="#espaco"  className="mx-4 transition-transform duration-300 hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md">Espaço</a>
          <a href="#evento" className="mx-4 transition-transform duration-300 hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md">Evento</a>
          <a href="#fotos"  className="mx-4 transition-transform duration-300 hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md">Fotos</a>
        </div>
      </div>
    </header>
  );
}