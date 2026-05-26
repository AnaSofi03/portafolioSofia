export const Habilidades = () => {
  return (
    <div className="relative h-screen bg-slate-900 flex flex-col items-center justify-start pt-32 px-10">

      <h1 className="text-4xl text-white">
        &lt;Habilidades/&gt;
      </h1>

      <div className="w-16 h-[2px] bg-white/20 mt-3"></div>

      {/* CONTENEDOR */}
      <div className="flex gap-16 mt-12">

        {/* FRONTEND */}
        <div>
          <h2 className="text-white text-lg mb-4">Frontend</h2>

          <div className="flex flex-wrap gap-3">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">JavaScript</span>
            <span className="skill">React</span>
            <span className="skill">Tailwind</span>
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h2 className="text-white text-lg mb-4">Backend</h2>

          <div className="flex flex-wrap gap-3">
            <span className="skill">Node.js</span>
            <span className="skill">Express</span>
            <span className="skill">MongoDB</span>
            <span className="skill">MySQL</span>
          </div>
        </div>

      </div>
    </div>
  );
};