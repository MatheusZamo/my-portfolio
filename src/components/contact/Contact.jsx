import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import "./contact.scss"

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
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_mo1av64", "template_vziojmd", formRef.current, {
        publicKey: "6Wj3ENNlb9q4GlB06",
      })
      .then(
        () => {
          setSuccess(true)
        },
        () => {
          setError(true)
        },
      )
  }
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
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea
            rows={8}
            placeholder="Descreva um pouco sobre o seu projeto"
            name="message"
          ></textarea>
          <button>Enviar</button>
          {/* {error && "Error"}
          {success && "Success"} */}
        </form>
      </div>
    </motion.div>
  )
}

export { Contact }
