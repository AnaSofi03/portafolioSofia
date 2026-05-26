import '../styles/sobreMi.css'

export const SobreMi = () => {
  return (
    <div className="relative h-screen bg-slate-900 flex items-center justify-center overflow-hidden px-10">
      <div className="w-full max-w-64 mr-32">
        <div className="relative p-[3px] rounded-full bg-gradient-to-r from-white/40 via-white/10 to-white/40 animate-border">
          <img
            src="sofi2.png"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="max-w-lg text-left">
        <h1 className="text-4xl text-white">&lt;Sobre Mí/&gt;</h1>
        <p className="text-gray-400 mt-2 italic">
          Programación, aprendizaje y resolución de problemas.
        </p>
        <div className="w-16 h-[2px] bg-white/20 mt-4"></div>
        <p className="text-gray-300 leading-relaxed mt-4">
          Soy <span className="text-white font-semibold">Sofía Guerrero</span>, estudiante de Programación y desarrolladora Full Stack en formación. Me apasiona crear soluciones tecnológicas, combinando diseño, lógica de negocio y bases de datos para construir soluciones funcionales. Disfruto aprender nuevas tecnologías y enfrentar desafíos que me permintan crecer profesionalmente.
        </p>
       <div className="flex flex-wrap gap-4 mt-4 text-gray-400">
          <span>📚 UTN-FRT</span>
          <span>🎓 Técnica en Informática</span>
          <span>💻 Full Stack</span>
        </div>
      <button className="mt-6 px-5 py-2 rounded-lg border border-white/20 text-white 
        hover:bg-white/10 hover:border-white/40 
        transition duration-300 backdrop-blur-sm">
                 Ver proyectos</button>
      </div>
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
};