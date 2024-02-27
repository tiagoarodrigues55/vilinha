import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-green-800" >
      <div className="flex justify-between w-8/12 h-26 bg-green-800">
      <div>
        <img src="/images/Logo.jpg" width={150} height={140} />
      </div>
      <div className="flex items-center font-normal font-serif text-3xl text-white" style={{ fontFamily: 'Cedarville Cursive, cursive'}}>
          <a href="/" className="mx-4 transition-transform duration-300 hover:text-green-600 transition-colors hover:bg-gray-200 p-4 rounded-md">Cardápio</a>
          <a href="/"  className="mx-4">Espaço</a>
          <a href="/" className="mx-4">Evento</a>
          <a href="/"  className="mx-4">Fotos</a>
        </div>
      </div>
    </header>
  );
}