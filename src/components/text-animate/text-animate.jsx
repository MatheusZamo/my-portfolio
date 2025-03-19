import { useState, useEffect } from "react"

const TypeWriter = () => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const textArray = ["Freelancer", "Full-Stack"]
  const typingDelay = 150
  const erasingDelay = 100
  const newTextDelay = 2000
  const cursorBlinkDelay = 500

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < textArray[index].length) {
            setText(textArray[index].slice(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), newTextDelay)
          }
        } else {
          if (charIndex > 0) {
            setText(textArray[index].slice(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setIndex((prev) => (prev + 1) % textArray.length)
          }
        }
      },
      isDeleting ? erasingDelay : typingDelay,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, cursorBlinkDelay)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <h2 className="dev">
      Desenvolvedor
      <span className="texto-animado">
        {text}
        {showCursor ? "|" : ""}
      </span>
    </h2>
  )
}

export { TypeWriter }
