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
        <h2>Vamos conversar</h2>
        <motion.h1 variants={variants}>Entre em contato</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Contate-me</h2>
          <p>Email: 19matheushenrique03@gmail.com</p>
          <p>Localização: Belo Horizonte, Minas Gerais - Brasil</p>
        </motion.div>
        <motion.div className="item rede-sociais" variants={variants}>
          <h2 className="sociais">Redes Sociais</h2>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.3, color: "rgb(95, 93, 93)", transition: 1 }}
            target="blank"
            href="https://github.com/MatheusZamo"
            className="sociais"
          >
            <iconify-icon
              icon="mdi:github"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/matheuszamo/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.3,
              color: "rgb(3, 110, 253)",
              transition: 1,
            }}
            target="blank"
            className="sociais"
          >
            <iconify-icon
              icon="mdi:linkedin"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/matheus.zamo/"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.4,
              color: "rgb(230, 42, 105)",
              transition: 1,
            }}
            target="blank"
            className="sociais"
          >
            <iconify-icon
              icon="mdi:instagram"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input
            type="number"
            required
            placeholder="Whatsapp"
            name="whatsapp"
          />
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
