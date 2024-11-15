import "./hero.scss"
import { motion } from "framer-motion"
import { TypeWriter } from "../text-animate/text-animate"
import { HomeAnimation } from "../home-animation/home-animation"

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
      <div className="wrapper">
        <div className="textContainer">
          <h1>Matheus Henrique</h1>
          <TypeWriter value="Freelancer" />
          <motion.img
            animate="scrollButton"
            variants={textVariants}
            className="imgButton"
            src="scroll.png"
            alt=""
          />
          <div className="animation">
            <HomeAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
