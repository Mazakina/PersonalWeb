import { SvgTriangle, SvgTriangleImg } from '../components/SvgTriangle';
import styles from '../styles/Home.module.scss'
import SvgGrid from '../components/Grid/index'
import { CurrentImageProvider } from '../contexts/CurrentImage';
import { pageChangeOnScroll } from '../utils/pageChangeOnScroll';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowDown } from '../components/Arrows/Arrows';


export default function Home() {
  const router = useRouter()
  const homePageRef = useRef<HTMLDivElement>()
  const [stateTick,setStateTick] = useState(0)
  let isThrottled = false;
  let lastDirection = 0
  let tickCount = 0
  useEffect(()=>{  
    pageChangeOnScroll({
      ref:homePageRef,
      isThrottled: isThrottled,
      lastDirection: lastDirection,
      router: router,
      tickCount: tickCount,
      nextAdress:'/projects',
      setTickCount:setStateTick,
    })
    
  },[])
  const className = `${stateTick!==0? '': styles.displayNone}`
  return (
        <CurrentImageProvider >
          <section ref={homePageRef} className={styles.home}>
            <div className={styles.centerContent}>
                    <SvgGrid className={styles.options} />
    
                    <SvgTriangleImg  polygonClass={'/images/back.png'} className={styles.firstTriangle} sizeMultiplier={16.5} colors={{firstColor:"#FE5B00",secondColor:"#3E1A18"}} offset={{firstColor:"0%",secondColor:"100%"}}/>

                    <SvgTriangle className={styles.secondTriangle } sizeMultiplier={16.5} colors={{firstColor:"#0F5075",secondColor:"#FFFFFF0"}} offset={{firstColor:"0%",secondColor:"100%"}}/>
              <div className={styles.me}>
                <h1>Paulo Mazakina.</h1>
                <p>Desenvolvedor Front-End.</p>
              </div>             
            </div>
          <ArrowDown extendStyleName={`${styles.arrowDown} ${className}`} />
          </section>
        </CurrentImageProvider>
        )   
}
