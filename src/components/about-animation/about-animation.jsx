import { useState } from "react"
import Lottie from "react-lottie"
import animationData from "./about-animation.json"
import "./about-animation.scss"

const AboutAnimation = () => {
  const [animation, setAnimation] = useState({
    isStopped: false,
    isPaused: false,
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isStopped={animation.isStopped}
        isPaused={animation.isPaused}
      />
    </div>
  )
}

export { AboutAnimation }
