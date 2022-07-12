import '../styles/globals.css'
import Header from '../components/Header/index'
import styles from '../styles/Home.module.scss'
import SideNav from '../components/SideNav'
import Transition from '../components/Transition'
import Router ,{ useRouter } from 'next/router'
import { AnimatePresence, motion, useCycle  } from 'framer-motion'
import { AppProps } from 'next/app'


function MyApp({ Component, pageProps }:AppProps ) {

  const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content


    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

   Router.events.on("routeChangeComplete", routeChange );
   Router.events.on("routeChangeStart", routeChange );

  const {asPath} = useRouter()
  const [opacity, cycle ] = useCycle(0, 50, 100)
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
            onTap={() => cycle()}
            >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
  )
}

export default MyApp
