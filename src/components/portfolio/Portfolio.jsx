import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Icon } from "@iconify/react"
import "./portfolio.scss"

const items = [
  {
    id: 1,
    title: "Next Level",
    img: "2.png",
    desc: "Bem-vindo ao Next Level, um e-commerce de games focado na venda de jogos e consoles! 🕹️🔥",
    link: "https://ecommerce-roan-eta-38.vercel.app/",
    icons: [
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "cib:js", width: 30, height: 30 },
      { icon: "flowbite:css-solid", width: 31, height: 31 },
      { icon: "flowbite:html-solid", width: 31, height: 31 },
    ],
  },
  {
    id: 2,
    title: "Viajou Anotou",
    img: "viajou-anotou.png",
    desc: "O Viajou Anotou permite aos usuários registrarem suas viagens de forma interativa. O usuário pode selecionar cidades no mapa, adicionar datas e notas sobre cada viagem e visualizar um histórico completo das localidades visitadas.",
    link: "https://viajou-anotou-mz.netlify.app/",
    icons: [
      { icon: "devicon-plain:reactrouter", width: 30, height: 30 },
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "cib:js", width: 30, height: 30 },
      { icon: "flowbite:css-solid", width: 31, height: 31 },
      { icon: "flowbite:html-solid", width: 31, height: 31 },
    ],
  },
  {
    id: 3,
    title: "Fit Genesis",
    img: "fit-genesis.png",
    desc: "Landing Page onde você encontra informações sobre aulas personalizadas, acesso a equipamentos de última geração e dicas de profissionais para maximizar seus resultados!",
    link: "https://fit-genesis.netlify.app/",
    icons: [
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "cib:js", width: 30, height: 30 },
      { icon: "flowbite:css-solid", width: 31, height: 31 },
      { icon: "flowbite:html-solid", width: 31, height: 31 },
    ],
  },
  {
    id: 1,
    title: "McDonald's",
    img: "mcdonalds.png",
    desc: "Este projeto é um sistema de Self Checkout inspirado nos totens de auto-atendimento do McDonald's, onde o usuário pode realizar seu pedido de forma dinâmica e intuitiva.",
    link: "https://self-checkout-rust.vercel.app/mcdonalds",
    icons: [],
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="linkAndIcons">
              <a href={item.link} target="blank">
                Acessar
              </a>
              <div className="icons">
                {item?.icons?.map((i, index) => {
                  return (
                    <Icon
                      key={index}
                      icon={i.icon}
                      width={i.width}
                      height={i.height}
                      className="icon"
                    />
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <div className="portfolio" ref={ref} id="Projetos">
      <div className="progress">
        <h2 className="titlePortfolio">Projetos em Destaques</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export { Portfolio }
