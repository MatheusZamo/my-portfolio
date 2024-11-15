import { useState } from "react"
import Lottie from "react-lottie"
import animationData from "./home-animation.json"
import "./home-animation.scss"

const HomeAnimation = () => {
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
        height={600}
        width={600}
        isStopped={animation.isStopped}
        isPaused={animation.isPaused}
      />
    </div>
  )
}

export { HomeAnimation }