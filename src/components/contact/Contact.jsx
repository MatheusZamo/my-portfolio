import "./contact.scss"
import { animate, motion } from "framer-motion"

const variants = {
  initial: {
    y: 500,
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

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Vamos trabalhar juntos</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>19matheushenrique03@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Localização</h2>
          <span>Belo Horizonte, Minas Gerais - Brasil</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Telefone</h2>
          <span>3112345678</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea
            rows={8}
            placeholder="Descreva um pouco sobre o seu projeto"
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </motion.div>
  )
}

export { Contact }
