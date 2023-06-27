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
import { useEffect, useRef, useState , MutableRefObject} from 'react';
import { wrap } from "@motionone/utils";
// import { ModalForm } from "../../components/ModalForm";

interface Props {
  container:MutableRefObject<HTMLDivElement>
}

export default function AboutMe ({container}:Props){


  const [modalState, setModalState] = useState(false)


  return(
    <section className={styles.aboutMe}>
      <motion.div
      className={styles.backTextContainer}>
        <ParallaxText containerRef={container} parallaxStyle={styles.parallaxSpanSecondLine} baseVelocity={4}>
          Lorem ipsum dolor sit amet.
        </ParallaxText>
        <ParallaxText containerRef={container} parallaxStyle={styles.parallaxSpan} baseVelocity={-4}>
          Lorem ipsum dolor sit amet.
        </ParallaxText>
      </motion.div>


      <motion.div className={styles.aboutBox}>
        <div className={styles.leftContent}>
          <div onClick={()=>console.log(container.current.scrollTop)} className={styles.description}>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sou Paulo Mazakina,<br/> Desenvolvedor Front-end, Aspirante a designer. 
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sempre fui conectado com Arte e Tecnologia, inclusive minhas graduaçoes sempre foram voltadas pra isso, a programação foi onde pude expressar minha logica de forma criativa.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tendo em mente a criaçao de codigos limpos,  performance e a experiencia do usuario.<br/> 
            </p>
          </div>
          <div className={styles.openModalButton}>
            {/* <button onClick={()=>{setModalState(true)}}>Contato</button> */}
          </div>
        </div>

        <div className={styles.centerContent}>
          <h2>SOBRE MIM</h2>
          <img alt='avatar' className={styles.midAbt} src="/images/midAbt.svg"/>
          <div className={styles.imageBorder}>
          </div>
        </div>

        <div className={styles.rightContent}>
          <p>Minha Jornada</p>
          <img alt='journey' className={styles.imageJourney} src="/images/journey.svg"/>
        </div>
      </motion.div>




    </section>
  )
}

interface ParallaxProps {
  containerRef: any
  children: string;
  baseVelocity: number;
  parallaxStyle:string;
}

export function ParallaxText({containerRef, children, baseVelocity = 100, parallaxStyle }: ParallaxProps) {
  const [customScrollY] = useState(useMotionValue(0));

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      customScrollY.set(customScrollY.get() + event.deltaY);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [customScrollY, containerRef]);

  const scrollY = useTransform(customScrollY, (value) => -value);

  const baseX = useMotionValue(0);
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
        <span onClick={()=>{console.log(customScrollY)}} className={parallaxStyle}>{children} </span>
        <span onClick={()=>{console.log(customScrollY)}} className={parallaxStyle}>{children} </span>
        <span onClick={()=>{console.log(customScrollY)}} className={parallaxStyle}>{children} </span>
        <span onClick={()=>{console.log(customScrollY)}} className={parallaxStyle}>{children} </span>
      </motion.div>
    </motion.div>
  );
}
