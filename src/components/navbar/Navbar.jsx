import "./navbar.scss"
import { motion } from "framer-motion"
import { Sidebar } from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          MH <span className="blue">| Dev.</span>
        </motion.span>
        <div className="social">
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.3, color: "rgb(95, 93, 93)" }}
          >
            <iconify-icon
              icon="mdi:github"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.3, color: "rgb(3, 110, 253)" }}
          >
            <iconify-icon
              icon="mdi:linkedin"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.4, color: "rgb(230, 42, 105)" }}
          >
            <iconify-icon
              icon="mdi:instagram"
              width="1.5em"
              height="1.5em"
            ></iconify-icon>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export { Navbar }
