import Image from "next/image";
import Header from "./Components/header";
import { EmblaCarousel } from "./Components/Carousel";



export default function Home() {
  return (
    <>
    {/* Link Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet" />
    <Header />
   {/* Div video */}
   <div className="relative" style={{ fontFamily: 'Daydream' }}>
    <video className="w-screen h-4/5" controls autoPlay loop muted>
      <source src='/images/vilinhavideo.mp4' type="video/mp4" />
    </video>

    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
       <h1 className="text-4xl sm:text-8xl font-normal text-center text-white">Sua praia no coração de São Paulo!</h1>
    </div>
</div>

    {/* Nossa missao */}
    <div style={{
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/vilinha.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', // Altura mínima para cobrir toda a tela
  // Outros estilos conforme necessário
}}>
      <div className="flex flex-col justify-center items-center text-white" style={{ fontFamily: 'Daydream' }}>
      <h1 className="mt-24 text-6xl font-normal text-center lg:mx-auto shadow-2xl">Nossa Missão...</h1>


      <div className="ml-20 mb-10">
          <p className="mt-24 text-3xl sm:text-5xl  text-center font-normal "> Buscamos trazer um oásis de tranquilidade e </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal "> aconchego no coração de São Paulo. Inspirado na </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal "> serenidade das praias, Oferecemos um refúgio urbano </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal "> com coquetéis tropicais, sabores litorâneos e uma </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal "> atmosfera que remete ao relaxamento à beira-mar. </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal "> Venha viver momentos de pura descontração e alegria </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal ">  no seu pedacinho de praia em plena cidade. </p>
        </div>



      <div className="flex mt-10 mb-10 sm:mt-20 w-60 bg-white h-16 items-center justify-center text-green-600 text-3xl rounded-2xl border-8 border-green-800 ">
      <a className="text-green-800" href="https://wa.me/551234567890" target="blank">Venha Conhecer</a>
      </div>
      </div>
    </div>

    {/* Nosso Espaço */}
    <div style={{
  backgroundImage: "url('/images/background.jpg')",
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', // Altura mínima para cobrir toda a tela
  // Outros estilos conforme necessário
}}>
      <div className="flex flex-col justify-center items-center text-white" style={{ fontFamily: 'Daydream' }}>
      <h1 className="mt-24 text-8xl font-normal text-center text-green-800">Nosso Espaço</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="mt-24">
          <div className="flex justify-center items-center">
          <img src="/images/hall.jpg" className="w-80 rounded-2xl border-4 border-green-600 " />
          </div>
          <div className="mt-6">
            <div className="grid gap-4 grid-cols-2">
             <img src="/images/outside.jpg" className="w-50 sm:w-64 sm:h-46  rounded-2xl border border-green-600 border-4" />
             <img src="/images/vilinha.jpg" className="w-50 sm:w-52 sm:h-52 rounded-3xl border border-green-600 border-4" />
            </div>
          </div>
        </div>
        <div className="ml-20 mb-10">
          <p className="mt-24 text-3xl sm:text-5xl  text-center font-normal text-green-800">Em nosso espaço você pode desfrutar de </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> uma atmosfera relaxante à beira-mar, com </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800">coquetéis tropicais e sabores que remetem </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> ao litoral. Nosso espaço é projetado para </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800">ser seu refúgio praiano na cidade, ideal </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> para momentos de descontração e </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800">  felicidade pura. Venha e sinta a brisa de </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800">  mar no Villinha Bar. </p>
        </div>
      </div>
    </div>
    </div>

    {/* Restaurante */}
    <div id="cardapio" style={{
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Altura mínima para cobrir toda a tela
      // Outros estilos conforme necessário
    }}>
      <div className="flex flex-col justify-center items-center text-white" style={{ fontFamily: 'Daydream' }}>
      <h1 className="mt-24 text-7xl font-normal text-center text-green-800">Restaurante</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="mt-24">
          <div className="flex  items-center">
          <img src="/images/pasteis.jpg" className="h-64 object-contain rounded-2xl ml-60 border border-green-600 border-4" />
          </div>
          <div className="mt-6">
            <div className="grid gap-0 grid-cols-2">
             <img src="/images/burguer.jpg" className="w-50 h-48 rounded-2xl border border-green-600 border-4 transform -translate-y-1/2" />
             <img src="/images/prato.jpg" className="w-64 h-48 rounded-2xl border border-green-600 border-4" />
            </div>
          </div>
        </div>
        <div className="ml-32">
          <p className="mt-40 text-3xl sm:text-6xl  text-center font-normal text-green-800"> Temos pratos executivos, lanches, </p>
          <p className="mt-5 text-3xl sm:text-6xl  text-center font-normal text-green-800"> porções e o melhor da comida </p> 
          <p className="mt-5 text-3xl sm:text-6xl text-center font-normal text-green-800"> brasileira para que você possa se </p>
          <p className="mt-5 text-3xl sm:text-6xl  text-center font-normal text-green-800"> deliciar enquanto aprecia o </p> 
          <p className="mt-5 text-3xl sm:text-6xl  text-center font-normal text-green-800"> ambiente e uma boa música... </p> 
        </div>
      </div>
      <div className="flex mt-10 mb-10 w-60 bg-white h-16 items-center justify-center text-green-600 text-3xl rounded-2xl border-8 border-green-600">
      <a className="font-normal" href="https://wa.me/551234567890" target="blank">Cardápio</a>
      </div>
    </div>
    </div>

    {/* Eventos e shows */}
    <div id="espaco" style={{
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Altura mínima para cobrir toda a tela
      // Outros estilos conforme necessário
    }}>
      <div className="flex flex-col justify-center items-center text-white" style={{ fontFamily: 'Daydream' }}>
      <h1 className="mt-24 text-8xl font-normal text-center text-green-800">Eventos e Shows</h1>
      <div className="flex justify-center items-center mt-24 ">
      <div className="">
          <p className="mt-10 text-3xl sm:text-5xl text-center font-normal text-green-800"> De dia o vilinha bar é um refugio de paz e </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> tranquilidade; à noite, transforma-se em um </p>
          <p className="mt-5 text-3xl sm:text-5xl text-center font-normal text-green-800"> epicentro de festa e diversão. Desfrute de shows </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> ao vivo com os maiores DJs e artistas da cena </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> brasileira, garantindo uma experiência de </p> 
          <p className="mt-5 text-3xl sm:text-5xl text-center font-normal text-green-800"> entretenimento inesquecível </p> 
        </div>
        <div className="hidden sm:flex sm:justify-center items-center sm:grid sm:grid-cols-2">
          <img src="/images/cantor.jpg" className="w-40 h-64 m-auto rounded-2xl border border-green-600 border-4 " />
          <img src="/images/meninas.jpg" className="w-68 h-48 rounded-2xl border border-green-600 border-4" />
          <img src="/images/turma.jpg" className="mt-10 col-span-2 m-auto w-96 h-56 rounded-2xl border border-green-600 border-4" />
        </div>
      </div>
      <div className="flex mt-10 mb-20 w-60 bg-white h-16 items-center justify-center text-green-600 text-3xl rounded-2xl border-8 border-green-600">
          <a className="" href="https://wa.me/551234567890" target="blank">Listas</a>
        </div>
      </div>
      </div>
      {/* Eventos Privados */}
      <div id="evento" style={{
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Altura mínima para cobrir toda a tela
      // Outros estilos conforme necessário
    }}>
      <div className="flex flex-col justify-center items-center  text-white" style={{ fontFamily: 'Daydream' }}>
      <h1 className="mt-24 text-6xl font-normal text-center text-green-800">Eventos Privados</h1>
      <div className="flex">
        <div className="mt-24">
          <div className="hidden sm:flex sm:justify-center sm:items-center">
          <img src="/images/aniversario.jpg" className="w-96 rounded-2xl border border-green-600 border-4" />
          </div>
          <div className="mt-6">
            <div className="hidden sm:flex sm:justify-center items-center gap-2 grid grid-cols-2">
             <img src="/images/girls.jpg" className="w-60 h-48 rounded-2xl border border-green-600 border-4" />
             <img src="/images/grupo.jpg" className="w-48 h-40 mb-8 ml-5 rounded border border-green-600 border-4" />
            </div>
          </div>
        </div>
        <div className="mt-10 ml-10">
          <p className="mt-24 text-3xl sm:text-5xl  text-center font-normal text-green-800"> O Villinha Bar é o cenário ideal para todos os seus </p>
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> eventos, seja um animado happy hour, uma comemoração </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> de aniversário ou um evento corporativo. Estamos de </p>
          <p className="mt-5 ml-2 text-3xl sm:text-5xl text-center font-normal text-green-800"> portas abertas para transformar suas ocasiões especiais em </p> 
          <p className="mt-5 ml-2 text-3xl sm:text-5xl  text-center font-normal text-green-800"> momentos inesquecíveis. garantimos o sucesso do seu evento </p> 
          <p className="mt-5 text-3xl sm:text-5xl  text-center font-normal text-green-800"> atendendo a cada detalhe com excelência </p> 
        </div>
      </div>
      <div className="flex mt-10 mb-10  w-60 bg-white h-16 items-center justify-center text-green-600 text-3xl rounded-2xl border-8 border-green-600">
      <a className="" href="https://wa.me/551234567890" target="blank">Entre em contato</a>
      </div>
    </div>
    </div>

    {/* Bar e Drinks */}
    <div id="fotos" style={{
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '80vh', // Altura mínima para cobrir toda a tela
      // Outros estilos conforme necessário
    }}>
      <div className="flex flex-col justify-center items-center text-white" style={{ fontFamily: 'Daydream' }}>
      <h1 className="mt-10 text-8xl font-normal text-center text-green-800">Bar e Drinks</h1>
      <div className="flex justify-center items-center mt-24">
      <div className="">
          <p className="mt-10 text-3xl sm:text-6xl  text-center font-normal text-green-800"> Nosso bar está preparado para te </p>
          <p className="mt-5 text-3xl sm:text-6xl  text-center font-normal text-green-800"> receber com as melhores bebidas do </p>
          <p className="mt-5 text-3xl sm:text-6xl  text-center font-normal text-green-800"> mercado e bar mens que revolucionam </p> 
          <p className="mt-5 text-3xl sm:text-6xl text-center font-normal text-green-800"> a maneira de fazer drinks... </p>
        </div>
        <div className="hidden sm:flex sm:justify-center items-center sm:grid sm:grid-cols-2">
          <img src="/images/drink2.jpg" className="w-48 h-60 ml-10 m-auto rounded-3xl border border-green-600 border-4 " />
          <img src="/images/drink1.jpg" className="mt-40 ml-6 w-36 h-48 rounded-2xl border border-green-600 border-4 transform translate-y-1/2" />
          <img src="/images/drink.jpg" className=" ml-24 m-auto w-46 h-56 rounded-2xl border border-green-600 border-4" />
        </div>
      </div>
      <div className="flex mt-5 mb-10 w-60 bg-white h-16 items-center justify-center text-green-600 text-3xl rounded-2xl border-8 border-green-600">
          <a className="" href="https://wa.me/551234567890" target="blank">Cardápio</a>
        </div>
      </div>
      </div>

      {/* Carrosel Fotos */}
      <div id="carrosel" style={{
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '80vh', // Altura mínima para cobrir toda a tela
      // Outros estilos conforme necessário
    }}>
      <EmblaCarousel />
    </div>
      {/* Div video */}
      <div className="relative" style={{ fontFamily: 'Daydream' }}>
    <video className="w-screen" controls autoPlay loop muted>
      <source src='/images/vilinhavideo.mp4' type="video/mp4" />
    </video>

    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
       <h1 className="text-4xl sm:text-7xl font-normal text-center text-white">Venha para o vilinha bar e celebre a vida da melhor maneira possivel!</h1>
    </div>
</div>

    </>
  );
}
