import { motion } from 'framer-motion'
import styles from './aboutMe.module.scss'


export default function AboutMe (){
return(
  <div className={styles.aboutMe}


  >
    <h2>ABOUT ME</h2>
    <motion.div 
    drag
    dragSnapToOrigin={true}
    dragElastic={0.5}
    dragConstraints={{top:0,left:0,right:0,bottom:0}}
    className={styles.aboutBox}></motion.div>
  </div>
)
}