import e from 'cors';
import '../styles/habilidades.css'
export const Habilidades= () =>{
  return(
   
    <section className='habilidades' id='habilidades'>

    <h2>Habilidades & Tecnologias</h2>

<div className='skills-container'>

  <div className='skill-card'>
    <h3>Frontend</h3>

  <div className='tags'>
    <span>HTML5</span>
    <span>CSS3</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>Bootstrap</span>
    <span>Tailwind</span>
  </div>
</div>

<div className='skill-card'>
  <h3>Backend</h3>

  <div className='tags'>
    <span>Node.js</span>
    <span>Express</span>
    <span>MySQL</span>
    <span>REST API</span>
    <span>C#</span>
    <span>.Net Core</span>
    <span>ASP.NET</span>
  </div>
</div>

<div className='skill-card'>
  <h3>Bases de Datos</h3>
  <div className='tags'>
    <span>MySQL</span>
    <span>SQL Server</span>
  </div>
</div>
<div className='skill-card'>
  <h3>Herramientas</h3>

  <div className='tags'>
    <span>Git</span>
    <span>GitHub</span>
    <span>Jira</span>
    <span>Figma</span>
  </div>

</div>
</div>

    </section>



  );
}

