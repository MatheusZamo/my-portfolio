import { Navbar } from "./components/navbar/Navbar"
import { Hero } from "./components/hero/Hero"
import { Services } from "./components/services/Services"
import { Portfolio } from "./components/portfolio/Portfolio"
import { Contact } from "./components/contact/Contact"

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>{/* about */}</section>
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
