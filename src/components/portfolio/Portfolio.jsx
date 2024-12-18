import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Icon } from "@iconify/react"
import "./portfolio.scss"

const items = [
  {
    id: 1,
    title: "Burger House",
    img: "burger-house.png",
    desc: "Com um design moderno e intuitivo, a landing page destaca os melhores produtos. Além disso ela e otimizada para conversão direciona, como realizar pedidos ou fazer reservas.",
    link: "https://burger-house-official.netlify.app",
    icons: [
      { icon: "ri:reactjs-fill", width: 30, height: 30 },
      { icon: "cib:js", width: 30, height: 30 },
      { icon: "flowbite:css-solid", width: 31, height: 31 },
      { icon: "flowbite:html-solid", width: 31, height: 31 },
    ],
  },
  {
    id: 1,
    title: "Next Js Blog",
    img: "https://placehold.co/500x400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    link: "#",
    icons: [],
  },
  {
    id: 1,
    title: "Netflix Clone",
    img: "https://placehold.co/500x400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    link: "#",
    icons: [],
  },
  {
    id: 1,
    title: "Music App",
    img: "https://placehold.co/500x400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    link: "#",
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
                  console.log(i?.icon)
                  return (
                    <Icon
                      key={index + 1}
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
