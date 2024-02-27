import Image from "next/image";
import Header from "./Components/header";

export default function Home() {
  return (
    <>
    <Header />
    <div>
      <video className="w-screen" controls>

      </video>
    </div>

    <div style={{
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/vilinha.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', // Altura mínima para cobrir toda a tela
  // Outros estilos conforme necessário
}}>
      <div className="flex flex-col justify-center items-center text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
      <h1 className="mt-24 text-6xl font-normal">Nossa Missão...</h1>
      <p className="mt-24 text-5xl text-center font-normal ">Buscamos trazer um oásis de tranquilidade e </p>
      <p className="mt-5 text-5xl text-center font-normal"> aconchego no coração de São Paulo. Inspirado na </p> 
      <p className="mt-5 text-5xl text-center font-normal">serenidade das praias, Oferecemos um refúgio urbano </p>
      <p className="mt-5 text-5xl text-center font-normal"> com coquetéis tropicais, sabores litorâneos e uma </p> 
      <p className="mt-5 text-5xl text-center font-normal">atmosfera que remete ao relaxamento à beira-mar. </p> 
      <p className="mt-5 text-5xl text-center font-normal"> Venha viver momentos de pura descontração e alegria </p>
      <p className="mt-5 text-5xl text-center font-normal">  no seu pedacinho de praia em plena cidade.</p>

      <div className="flex mt-16 w-60 bg-white h-16 items-center justify-center text-green-600 text-3xl rounded-2xl border border-green-600 border-4">
      <a className="" href="https://wa.me/551234567890" target="blank">Venha Conhecer</a>
      </div>
      </div>
    </div>
    </>
  );
}
