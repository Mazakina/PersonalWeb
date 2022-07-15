import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Transition.module.scss'

interface TransitionProps {
  asPath:string;
}

export default function Transition({asPath}:TransitionProps){
  const control = useAnimation()

  const [path, setPath] = useState('')

    useEffect(()=>{
      // if initial load there is no animation
    if(!path){
      control.start({
        width:0,
        borderRight: ['solid 10px #77ffef52','solid 500px #77ffef52','solid 500px #77ffef52','solid 50vw #77ffef52'],
        opacity:0
      })
      setPath(asPath)
    } else{ 
    control.start({
      width: ['0vw','130vw','130vw','100vw'],
      opacity:[1,1,1],
      x: ['0%','0%','100%'] ,
      borderRight: ['solid 10px #77ffef52','solid 500px #77ffef52','solid 500px #77ffef52','solid 50vw #77ffef52'],
      left:['0%','0%','0%','50%','100%'] 
    })

  }}
  ,[asPath])
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
      transition={{duration:1.3}}
    />
  </div>
 )
}