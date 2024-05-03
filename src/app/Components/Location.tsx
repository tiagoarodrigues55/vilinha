import { links } from '@/lib/constants'
import { Link } from './Link'

export function Location() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/section-bg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Altura mínima para cobrir toda a tela
      }}
      className="flex items-center justify-center relative"
    >
      <div className="flex flex-col items-center gap-12 py-12 w-full max-w-5xl px-4">
        <h1 className="text-6xl font-normal text-center text-green-800">
          Localização
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-12">
          <div className="flex flex-col text-2xl md:text-4xl font-serif gap-6 md:gap-12 text-[#244D0C]">
            <a href={links.instagram} target="_blank" className="flex gap-2 items-center">
              <span>@Villinhaoficial</span>
            </a>
            <a href={links.google} target="_blank" className="flex gap-2 items-center">
              <span>R. Quatá, 293 - Vila Olímpia</span>
            </a>
            <a href={links.whatsapp.link} target="_blank" className="flex gap-2 items-center">
              <span>(11) 97242 - 4746</span>
            </a>
          </div>
          <div
            style={{
              width: '100%',
              height: 350,
              border: 0,
              margin: 0,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-23.598705912956795,%20-46.676608377998846+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              {/* <a href="https://www.gps.ie/">gps tracker sport</a> */}
            </iframe>
          </div>
        </div>

        <Link href={links.maps} target="_blank">Venha nos conhecer</Link>
      </div>
    </section>
  )
}
