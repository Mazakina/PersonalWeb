import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Transition.module.scss'

import { useRouter } from 'next/router'

export default function Transition(){
  const control = useAnimation()
  const router = useRouter()


  const [path, setPath] = useState<string>()

  useEffect(() => {
    if (!path) {
      control.set({
        width: 0,
        opacity: 0,
      });
      setPath(router.asPath);
    }
  }, [control, path, router.asPath]);

  useEffect(() => {
    if(!path){
      return
    }
    const handleRouteChangeStart = (url) => {
      control.start({
        width: ['0vw', '130vw', '0vw'],
        opacity: [1, 1, 1, 0],
        x: ['0%', '0%','100%'],
        left: ['0%', '0%','100%'],
      });
      setPath(url);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

  }, [control, router]);

 return(
  <div className={styles.overflowControl}>
    <motion.div 
      className={styles.transitionContainer}
      animate={control}
      initial={{
        width: 0,
        opacity:0,
        x: 0 ,
        left:0 
      }}
      transition={{
        duration:1.3,
        ease: 'easeInOut'
      }}
    />
  </div>
 )
}