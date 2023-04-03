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


  const {asPath} = useRouter()
  // const [opacity, cycle ] = useCycle(0, 50, 100)
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
        <Transition asPath={asPath}/>
        {windowWidth > 760? <Header/>:<ModalHeader/>}
        <SideNav/>
        <AnimatePresence  mode="wait" initial={false}>
          <motion.div  
            style={{position:'absolute',}}
            key={asPath}

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
