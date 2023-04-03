import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Transition.module.scss'
import { NextRouter } from 'next/router'

import { useRouter } from 'next/router'

export default function Transition(push:string){
  const control = useAnimation()
  const router = useRouter()

  const [path, setPath] = useState('')

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
    const handleBeforeHistoryChange = (url) => {
      control.start({
        width: ['0vw', '130vw', '0vw'],
        opacity: [1, 1, 1, 0],
        x: ['0%', '0%','100%'],
        left: ['0%', '0%','100%'],
      });
      setPath(url);
    };

    router.events.on('beforeHistoryChange', handleBeforeHistoryChange);

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