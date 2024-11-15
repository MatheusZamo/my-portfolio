import { useState, useEffect } from "react"

function TypeWriter({ value }) {
  const [text, setText] = useState("")

  const typeWriter = (text, i = 0) => {
    if (i < value?.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => {
        typeWriter(text, i + 1)
      }, 100)
    }
  }

  useEffect(() => {
    typeWriter(value)
  }, [])

  return (
    <h2>
      Desenvolvedor <span>{text}</span>
    </h2>
  )
}

export { TypeWriter }
