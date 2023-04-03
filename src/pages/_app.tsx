import '../styles/globals.css'
import Header from '../components/Header/index'
import styles from '../styles/Home.module.scss'
import SideNav from '../components/SideNav'
import Transition from '../components/Transition'
import { useRouter } from 'next/router'
import { AnimatePresence, motion  } from 'framer-motion'
import { AppProps } from 'next/app'
import { useTransitionFix } from '../hooks/useTransitionFix'
import { InitialLoadProvider } from '../contexts/InitalLoad'
import { useState } from 'react'
import ModalHeader from '../components/ModalHeader'


function MyApp({ Component, pageProps }:AppProps ) {

useTransitionFix()

  // const [opacity, cycle ] = useCycle(0, 50, 100)
  const router = useRouter()

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
      <div className={styles.container}>
        <Transition  />
        {windowWidth > 760? <Header/>:<ModalHeader/>}
        <SideNav/>
        <AnimatePresence initial={false}>
          <motion.div  
<<<<<<< HEAD
            key={asPath}
=======
            style={{position:'absolute',}}
            key={router.asPath}
>>>>>>> 80c8144d52098923655be130db3a6c3a151e8985
            initial={{opacity:0,
              position:'absolute',
            }}
            animate={{opacity:[0,0,1]}}
            exit={{opacity:0}}
            transition={{
<<<<<<< HEAD
              duration:1,
=======
              duration:.5,
>>>>>>> 80c8144d52098923655be130db3a6c3a151e8985
            }}
            // onTap={() => cycle()}
            >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </InitialLoadProvider>
  )
}

export default MyApp
