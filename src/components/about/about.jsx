import { AboutAnimation } from "../about-animation/about-animation"
import { motion } from "framer-motion"
import "./about.scss"

const skills = {
  initial: {
    x: -120,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const about = {
  initial: {
    x: 120,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const icons = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}
const About = () => {
  return (
    <div className="about">
      <h1>Sobre mim</h1>
      <div className="about-me">
        <div className="animation-about">
          <AboutAnimation />
        </div>
        <motion.p
          className="p-about"
          variants={about}
          whileInView="animate"
          initial="initial"
        >
          Sou desenvolvedor web freelancer com formação em Análise e
          Desenvolvimento de Sistemas. A decisão de trabalhar como freelancer me
          permitiu ter mais autonomia e flexibilidade para explorar diferentes
          projetos e tecnologias. Essa liberdade, combinada com a minha
          experiência em desenvolvimento web, me possibilita oferecer soluções
          sob medida para cada cliente, sempre buscando a excelência e a
          satisfação dos resultados.
        </motion.p>
      </div>
      <div className="skills">
        <motion.div
          className="div-skills"
          initial="initial"
          whileInView="animate"
          variants={skills}
        >
          <h2 className="title-skills">Habilidades</h2>
          <p className="p-skills">
            Sou especialista em desenvolvimento web front-end, com domínio
            sólido em Html, Css e JavaScript. Conhecimentos em bibliotecas e
            frameworks como React Js, Next Js, Bootstrap e Materialize, me
            permite criar interfaces de usuário modernas, responsivas e
            interativas, garantindo uma excelente experiência do usuário.
          </p>
        </motion.div>
        <motion.ul
          className="icons-skills"
          variants={icons}
          initial="initial"
          whileInView="animate"
        >
          <li>
            <iconify-icon
              icon="ri:reactjs-fill"
              width="4em"
              height="4em"
            ></iconify-icon>
            <p className="p-icon">React Js</p>
          </li>
          <li>
            <iconify-icon
              icon="ri:nextjs-fill"
              width="4em"
              height="4em"
            ></iconify-icon>
            <p className="p-icon">Next Js</p>
          </li>
          <li>
            <iconify-icon
              icon="ri:javascript-fill"
              width="4em"
              height="4em"
            ></iconify-icon>
            <p className="icon-js">Javascript</p>
          </li>
          <li>
            <iconify-icon
              icon="ri:html5-fill"
              width="4em"
              height="4em"
            ></iconify-icon>
            <p className="p-icon">Html</p>
          </li>
          <li>
            <iconify-icon
              icon="tdesign:css3-filled"
              width="4em"
              height="4em"
            ></iconify-icon>
            <p className="p-css">Css</p>
          </li>
          <li>
            <iconify-icon
              icon="mdi:bootstrap"
              width="4em"
              height="4em"
            ></iconify-icon>
            <p className="icon-bot">Bootstrap</p>
          </li>
        </motion.ul>
      </div>
    </div>
  )
}

export { About }
