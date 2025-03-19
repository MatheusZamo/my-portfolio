import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Icon } from "@iconify/react"
import "./portfolio.scss"

const items = [
  {
    id: 1,
    title: "Self Checkout",
    img: "self.png",
    type: "Sistema Web",
    desc: "Este projeto foi inspirado nos totens de auto-atendimento do McDonald's, proporcionando uma experiência dinâmica, intuitiva e eficiente para quem deseja realizar pedidos de forma prática e sem complicações. Sistema ideal para restaurantes, lanchonetes, cafeterias e outros estabelecimentos",
    link: "https://self-checkout-rust.vercel.app/mcdonalds",
    icons: [
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "catppuccin:next", width: 30, height: 30 },
      { icon: "akar-icons:typescript-fill", width: 30, height: 30 },
      { icon: "mdi:tailwind", width: 30, height: 30 },
      { icon: "akar-icons:postgresql-fill", width: 30, height: 30 },
      { icon: "lineicons:prisma", width: 30, height: 30 },
    ],
  },
  {
    id: 2,
    title: "Next Level",
    img: "next-level.png",
    type: "E-commerce",
    desc: "O Next Level é mais do que uma simples loja virtual, é um verdadeiro paraíso para os apaixonados por videogames! Aqui, você encontra uma seleção de jogos, consoles e acessórios para todas as plataformas, desde os clássicos até os lançamentos mais aguardados.",
    link: "https://ecommerce-roan-eta-38.vercel.app/",
    icons: [
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "mdi:tailwind", width: 30, height: 30 },
    ],
  },
  {
    id: 3,
    title: "Viajou Anotou",
    img: "viajou.png",
    type: "Sistema Web",
    desc: "O Viajou Anotou é o companheiro ideal para viajantes que desejam registrar e reviver cada momento especial de suas aventuras! Com uma interface intuitiva e interativa, o usuário pode criar um verdadeiro diário digital de viagens, organizando suas experiências de forma prática e envolvente.",
    link: "https://viajou-anotou-mz.netlify.app/",
    icons: [
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "devicon-plain:reactrouter", width: 30, height: 30 },
      { icon: "flowbite:css-solid", width: 31, height: 31 },
    ],
  },
  {
    id: 4,
    title: "Fit Genesis",
    img: "fit.png",
    type: "Landing Page",
    desc: "Se você busca aulas personalizadas, acesso a equipamentos de última geração e orientações de especialistas, encontrou o lugar certo! Nossa Landing Page foi criada para proporcionar todas as informações que você precisa para atingir seus objetivos fitness de forma eficiente e motivadora.",
    link: "https://fit-genesis.netlify.app/",
    icons: [
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "mdi:tailwind", width: 30, height: 30 },
    ],
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
            <p className="type-project">{item.type}</p>
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
