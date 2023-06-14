import '../styles/globals.css'
import styles from '../styles/Home.module.scss'

import { useTransitionFix } from '../hooks/useTransitionFix'
import { InitialLoadProvider } from '../contexts/InitalLoad'

import Header from '../components/Header/index'
import SideNav from '../components/SideNav'
import Transition from '../components/Transition'
import ModalHeader from '../components/ModalHeader'

import { AnimatePresence, motion  } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

function MyApp({ Component, pageProps }:AppProps ) {
  const containerRef = useRef<HTMLDivElement>(null);

  useTransitionFix()

  // const [opacity, cycle ] = useCycle(0, 50, 100)
  const {asPath} = useRouter()

  const [windowWidth, setWindowWidth] = useState(1440)
  if(typeof window !== 'undefined'){
      const { innerWidth: width, innerHeight: height } = window;
      const handleResize = () =>{
          setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize,false)
      window.addEventListener("load", handleResize, false);
  }



  return (
    <InitialLoadProvider>
      <div  ref={containerRef}  className={styles.container}>
        <Transition  />
        {windowWidth > 760? <Header/>:<ModalHeader/>}
        <SideNav/>
        <AnimatePresence initial={false}>
          <motion.div  
            key={asPath}
            initial={{opacity:0,
              position:'absolute',
            }}
            animate={{opacity:[0,0,1]}}
            exit={{opacity:0}}
            transition={{
              duration: 1.5 ,
            }}
            // onTap={() => cycle()}
            >
            <Component {...pageProps} container={containerRef} />
          </motion.div>
        </AnimatePresence>
      </div>
    </InitialLoadProvider>
  )
}

export default MyApp
