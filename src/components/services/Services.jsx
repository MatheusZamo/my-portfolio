import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import "./services.scss"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: "-100px" })
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      //isInView &&
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
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
            <motion.b whileHover={{ color: "orange" }}>Ideias</motion.b> Únicas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Para o seu</motion.b>{" "}
            Negócio
          </h1>
          <button>Meus serviços</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Landing Pages</h2>
          <p>
            Landing pages que convertem visitantes em clientes, otimizadas para
            diferentes plataformas e objetivos de negócio.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Suporte</h2>
          <p>
            Ofereço suporte técnico personalizado e eficiente para garantir o
            bom funcionamento dos sistemas desenvolvidos.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personalização</h2>
          <p>
            Adapto e otimizo soluções existentes para atender às necessidades
            específicas de cada cliente, garantindo a melhor experiência de uso.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Estratégias de SEO</h2>
          <p>
            Otimizo sites para mecanismos de busca , garantindo maior
            visibilidade e mais tráfego orgânico para o seu negócio.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export { Services }
