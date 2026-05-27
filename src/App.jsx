import './App.css'

import { NavBar } from './components/NavBar'
import { Inicio } from './components/Inicio'
import { SobreMi } from './components/SobreMi'
import { Habilidades } from './components/Habilidades'


function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      
      <NavBar />
       <section id="inicio">
        <Inicio />
      </section>

      <section id="sobremi">
        <SobreMi />
      </section>
      
<Habilidades />  

    </div>
  )
}

export default App