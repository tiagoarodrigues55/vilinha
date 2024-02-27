import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center items-center bg-green-800" >
      <div className="flex justify-between w-8/12 h-26 bg-green-800">
      <div>
        <img src="/images/Logo.jpg" width={150} height={140} />
      </div>
      <div className="flex items-center font-normal font-serif text-3xl text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
          <a href="/" className="mx-2">Cardápio</a>
          <a href="/"  className="mx-2">Espaço</a>
          <a href="/" className="mx-2">Evento</a>
          <a href="/"  className="mx-2">Fotos</a>
        </div>
      </div>
    </header>
  );
}