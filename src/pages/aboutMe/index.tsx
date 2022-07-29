import { motion } from 'framer-motion'
import styles from './aboutMe.module.scss'
import Image from 'next/image'

export default function AboutMe (){
return(
  <section className={styles.aboutMe}>
    <h2>ABOUT ME</h2>
    <motion.div 
    drag
    dragSnapToOrigin={true}
    dragElastic={0.5}
    dragConstraints={{top:0,left:0,right:0,bottom:0}}
    className={styles.aboutBox}>
        <div className={styles.leftContent}>
          <h2>Ola,</h2>
          <p>sou Paulo Mazakina, Desenvolvedor Front-end, apaixonado por contar historias. 
             Acho que alem de criar codigos, meu trabalho como desenvolvedor tem que ser feito para
          </p>
        </div>
        <div className={styles.center}>
          <div className={styles.imageBorder}>
          </div>
        </div>
        <div>

        </div>
    </motion.div>


  </section>
)
}