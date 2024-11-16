import { Navbar } from "./components/navbar/Navbar"
import { Hero } from "./components/hero/Hero"
import { Services } from "./components/services/Services"
import { Portfolio } from "./components/portfolio/Portfolio"
import { Contact } from "./components/contact/Contact"
import { About } from "./components/about/about"

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export { App }
