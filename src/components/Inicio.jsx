import '../styles/inicio.css'
import { ParticlesBackground } from "./ParticlesBackground";
import { TypeAnimation } from 'react-type-animation';

export const Inicio = () => {
  return (

    <section className="relative h-screen bg-slate-900 flex items-center  overflow-hidden">

      <div className="container mx-auto flex items-center justify-between px-10">

        <div className="text-white max-w- ml-24">
          <h2 className="text-3xl text-white mb-2 mr-12">
            Hola, soy
          </h2>

          <h1 className="text-7xl font-bold text-[#ff5080]">
            Sofía Guerrero
          </h1>

          <h3 className="text-3xl mt-4 text-white">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Apasionada por la tecnología",
                2000,
                "En constante aprendizaje",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h3>

          <a
  href="/CurriculumAnaSofiaGuerrero.pdf"
  download="CurriculumAnaSofiaGuerrero.pdf"
>
  <button className="mt-8 px-6 py-3 border border-[#ff5080] text-[#ff5080] rounded-md hover:bg-[#ff5080] hover:text-white transition duration-300">
    Descargar CV
  </button>
</a>

        </div>
        <div>
          <img
            src="/sofi2.png"
            alt="Sofia Guerrero"
            className="w-80 drop-shadow-2xl mr-24"
          />
        </div>

      </div>

    </section>

  )
}