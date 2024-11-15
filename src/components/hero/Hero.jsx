import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <section>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      <div className="wrapper">
        <div className="textContainer">
          <h1>Matheus Henrique</h1>
          <h2>
            Desenvolvedor <span>Freelancer</span>
          </h2>
          <motion.img
            animate="scrollButton"
            variants={textVariants}
            className="imgButton"
            src="scroll.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export { Hero }
