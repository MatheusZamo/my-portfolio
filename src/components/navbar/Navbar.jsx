import "./navbar.scss"
import { motion } from "framer-motion"
import { Sidebar } from "../sidebar/Sidebar"

const variants = {
  initial: {
    y: -500,
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

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial="initial" animate="animate" variants={variants}>
          MH <span className="blue">| Dev.</span>
        </motion.span>
        <motion.div
          className="social"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.a
            whileHover={{ scale: 1.3, color: "rgb(95, 93, 93)", transition: 1 }}
            target="blank"
            href="https://github.com/MatheusZamo"
          >
            <iconify-icon
              icon="mdi:github"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/matheuszamo/"
            whileHover={{
              scale: 1.3,
              color: "rgb(3, 110, 253)",
              transition: 1,
            }}
          >
            <iconify-icon
              icon="mdi:linkedin"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/matheus.zamo/"
            whileHover={{
              scale: 1.4,
              color: "rgb(230, 42, 105)",
              transition: 1,
            }}
          >
            <iconify-icon
              icon="mdi:instagram"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export { Navbar }
