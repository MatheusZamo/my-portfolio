import { AboutAnimation } from "../about-animation/about-animation"
import "./about.scss"

const About = () => {
  return (
    <div className="about">
      <h1>Sobre mim</h1>
      <div className="about-me">
        <div className="animation-about">
          <AboutAnimation />
        </div>
        <p className="p-about">
          Sou desenvolvedor web freelancer com formação em Análise e
          Desenvolvimento de Sistemas. A decisão de trabalhar como freelancer me
          permitiu ter mais autonomia e flexibilidade para explorar diferentes
          projetos e tecnologias. Essa liberdade, combinada com a minha
          experiência em desenvolvimento web, me possibilita oferecer soluções
          sob medida para cada cliente, sempre buscando a excelência e a
          satisfação dos resultados.
        </p>
      </div>
      <div className="skills">
        <div className="div-skills">
          <h2 className="title-skills">Habilidades</h2>
          <p className="p-skills">
            Sou especialista em desenvolvimento web front-end, com domínio
            sólido em Html, Css e JavaScript. Conhecimentos em bibliotecas e
            frameworks como React Js, Next Js, Bootstrap e Materialize, me
            permite criar interfaces de usuário modernas, responsivas e
            interativas, garantindo uma excelente experiência do usuário.
          </p>
        </div>
        <ul className="icons-skills">
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
        </ul>
      </div>
    </div>
  )
}

export { About }
