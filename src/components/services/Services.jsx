import { motion } from "framer-motion"
import "./services.scss"

const message = {
  initial: {
    x: -100,
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

const variants = {
  initial: {
    y: 200,
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

const Services = () => {
  return (
    <div className="services">
      <motion.div
        className="textContainer"
        variants={message}
        whileInView="animate"
        initial="initial"
      >
        <p className="textMessage">
          Meu foco é impulsionar o crescimento
          <br />E desenvolvimento da sua marca.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "rgb(3, 110, 253)" }}>
              Ideias
            </motion.b>{" "}
            Únicas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgb(3, 110, 253)" }}>
              Para o seu
            </motion.b>{" "}
            Negócio
          </h1>
          <button>Meus serviços</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        whileInView="animate"
        initial="initial"
      >
        <motion.div className="box">
          <h2 className="title-service">Sites Sob Medida</h2>
          <div className="icon-services">
            <iconify-icon
              icon="la:laptop-code"
              width="6em"
              height="6em"
            ></iconify-icon>
          </div>
          <p>
            Sites que convertem visitantes em clientes, crio soluções digitais
            personalizadas para impulsionar o seu sucesso online.
          </p>
        </motion.div>
        <motion.div className="box">
          <h2 className="title-service">Suporte</h2>
          <div className="icon-services">
            <iconify-icon
              icon="basil:headset-solid"
              width="6em"
              height="6em"
            ></iconify-icon>
          </div>
          <p>
            Ofereço suporte técnico personalizado e eficiente para garantir o
            bom funcionamento dos sistemas desenvolvidos.
          </p>
        </motion.div>
        <motion.div className="box">
          <h2 className="title-service">Personalização</h2>
          <div className="icon-services">
            <iconify-icon
              icon="vaadin:tools"
              width="5em"
              height="5em"
            ></iconify-icon>
          </div>
          <p>
            Adapto e otimizo soluções existentes para atender às necessidades
            específicas de cada cliente, garantindo a melhor experiência de uso.
          </p>
        </motion.div>
        <motion.div className="box">
          <h2 className="title-service">Estratégias de SEO</h2>
          <div className="icon-services">
            <iconify-icon
              icon="ri:seo-line"
              width="6em"
              height="6em"
            ></iconify-icon>
          </div>
          <p>
            Otimizo sites para mecanismos de busca , garantindo maior
            visibilidade e mais tráfego orgânico para o seu negócio.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export { Services }
