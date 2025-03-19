import "./hero.scss"
import { motion } from "framer-motion"
import { TypeWriter } from "../text-animate/text-animate"
import { HomeAnimation } from "../home-animation/home-animation"

const variants = {
  initial: {
    x: -200,
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

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <motion.h1
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            Matheus Henrique
          </motion.h1>
          <TypeWriter />
          <div className="animation">
            <HomeAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
