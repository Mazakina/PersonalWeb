import '../styles/globals.css'
import Header from '../components/Header/index'
import styles from '../styles/Home.module.scss'
import SideNav from '../components/SideNav'
import Transition from '../components/Transition'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { AppProps } from 'next/app'


function MyApp({ Component, pageProps }:AppProps ) {
  const {asPath} = useRouter()

  return (
      <div className={styles.container}>
        <Transition asPath={asPath}/>
        <Header/>
        <SideNav/>
        <AnimatePresence initial={false}>
          <motion.div  
            key={asPath}
            initial={{opacity:0,
              position:'absolute'}}
            animate={{opacity:[0,0,0,1,1]}}
            exit={{opacity:0}}
            transition={{
              duration:1
            }}
            >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
  )
}

export default MyApp
