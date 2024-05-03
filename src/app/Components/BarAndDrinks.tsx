import { Link } from './Link'

export function BarAndDrinks() {
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
      className="grid place-items-center"
    >
      <div
        className="flex flex-col gap-8 items-center text-white py-16 px-4"
        style={{ fontFamily: 'Daydream' }}
      >
        <h1 className="text-8xl font-normal text-center">Bar e Drinks</h1>
        <div className="flex lg:gap-0 gap-5 md:flex-row flex-col justify-center items-center">
          <div className="">
            <p className="mt-10 text-3xl sm:text-6xl  text-center font-normal">
              {' '}
              Nosso bar está preparado para te{' '}
            </p>
            <p className="mt-5 text-3xl sm:text-6xl  text-center font-normal">
              {' '}
              receber com as melhores bebidas do{' '}
            </p>
            <p className="mt-5 text-3xl sm:text-6xl  text-center font-normal">
              {' '}
              mercado e bar mens que revolucionam{' '}
            </p>
            <p className="mt-5 text-3xl sm:text-6xl text-center font-normal">
              {' '}
              a maneira de fazer drinks...{' '}
            </p>
          </div>
          <div className="grid-cols-3 gap-2 items-center grid md:grid-cols-2">
            <img
              src="/images/drink2.jpg"
              className="w-48 h-60 md:ml-10 m-auto rounded-3xl border border-[#244D0C] border-4 "
            />
            <img
              src="/images/drink1.jpg"
              className="md:mt-40 md:ml-6 w-36 h-48 rounded-2xl border border-[#244D0C] border-4 md:transform md:translate-y-1/2"
            />
            <img
              src="/images/drink.jpg"
              className="md:ml-24 md:m-auto w-46 h-56 rounded-2xl border border-[#244D0C] border-4"
            />
          </div>
        </div>
        <Link>Cardápio</Link>
      </div>
    </div>
  )
}
