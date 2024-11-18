import { Navbar } from "./components/navbar/Navbar"
import { Hero } from "./components/hero/Hero"
import { Services } from "./components/services/Services"
import { Portfolio } from "./components/portfolio/Portfolio"
import { Contact } from "./components/contact/Contact"
import { About } from "./components/about/about"

const App = () => {
  return (
    <div>
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Sobre">
        <About />
      </section>
      <section id="Serviços">
        <Services />
      </section>
      <Portfolio />
      <section id="Contato">
        <Contact />
      </section>
    </div>
  )
}

export { App }
