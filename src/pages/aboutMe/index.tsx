import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import styles from './aboutMe.module.scss'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { wrap } from "@motionone/utils";


export default function AboutMe (){
  useEffect(()=>{
    setTimeout(() => {
    window.scroll(300,300)
      
    }, 700);
  },
  [])
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [comment, setComment]= useState('')
  function handleClick(event) {
    event.stopPropagation();
    return false;
  }
  const [modalState, setModalState] = useState(false)
  async function handleOnSubmit(event){
    event.preventDefault();
    const formData = {}
  }
return(
  <section className={styles.aboutMe}>
    <div className={styles.backTextContainer}>
      <ParallaxText baseVelocity={4}>
        Lorem ipsum dolor sit amet.
      </ParallaxText>
      <ParallaxText baseVelocity={-4}>
        Lorem ipsum dolor sit amet.
      </ParallaxText>
    </div>
    <motion.div 
    
    className={styles.aboutBox}>
      <div className={styles.leftContent}>
        <div className={styles.description}>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sou Paulo Mazakina,<br/> Desenvolvedor Front-end, Aspirante a designer. 
          <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sempre fui conectado com Arte e Tecnologia, inclusive minhas graduaçoes sempre foram voltadas pra isso, a programação foi onde pude expressar minha logica de forma criativa.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tendo em mente a criaçao de codigos limpos,  performance e a experiencia do usuario.<br/> 
          </p>
        </div>
        <div className={styles.openModalButton}>
          <button onClick={()=>{setModalState(true)}}>Contato</button>
        </div>
      </div>

      <div className={styles.centerContent}>
      <h2>SOBRE MIM</h2>

      <img className={styles.midAbt} src="/images/midAbt.svg"/>
        <div className={styles.imageBorder}>
        </div>
      </div>

      <div className={styles.rightContent}>
        <p>Minha Jornada</p>
        <img className={styles.imageJourney} src="/images/journey.svg"/>
      </div>
    </motion.div>


    { modalState && 
    <div  className={styles.formModal} onClick={()=>{setModalState(false)}}>
      <form method='post' onSubmit={handleOnSubmit}  onClick={(e)=>{handleClick(e)}}>
        <p>
          <input type="text"
          value={name} 
          onChange={(event)=>{setName(event.target.value)}} 
          placeholder="Nome" name='name'></input>
        </p>
        <p>
          <input value={email} 
          onChange={(event)=>{setEmail(event.target.value)}} 
          type="email" placeholder="E-mail" name='email'></input>
        </p>
        <p>
          <textarea 
          value={comment} 
          onChange={(event)=>{setComment(event.target.value)}} 
          placeholder="Me mande uma mensagem, tambem aceito opniões sobre algo que eu possa melhorar!"  
          name='message'/>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </div>}
  </section>
)
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  // @ts-ignore
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}} className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <span className={styles.parallaxSpan}>{children} </span>
        <span className={styles.parallaxSpan}>{children} </span>
        <span className={styles.parallaxSpan}>{children} </span>
        <span className={styles.parallaxSpan}>{children} </span>
      </motion.div>
    </motion.div>
  );
}
