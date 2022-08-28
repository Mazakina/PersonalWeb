import { motion } from 'framer-motion'
import styles from './aboutMe.module.scss'
import Image from 'next/image'

export default function AboutMe (){
return(
  <section className={styles.aboutMe}>
    <h2>SOBRE MIM</h2>
    <motion.div 
    drag
    dragSnapToOrigin={true}
    dragElastic={0.5}
    dragConstraints={{top:0,left:0,right:0,bottom:0}}
    className={styles.aboutBox}>
      <div className={styles.leftContent}>
        <div className={styles.description}>
          <p> &nbsp; Sou Paulo Mazakina, Desenvolvedor <br/>Front-end, Aspirante a Designer. 
          <br/><br/>&nbsp;Sempre fui conectado com Tecnologia e Arte, inclusive minhas graduaçoes sempre foram voltadas pra isso, a programação foi onde pude expressar minha logica de forma criativa.<br/>
            &nbsp;Tendo em mente a criaçao de codigos limpos,  performance e a experiencia do usuario.<br/> 
          </p>
        </div>
      </div>
      <div className={styles.centerContent}>
      <img className={styles.midAbt} src="/images/midAbt.svg"/>
        <div className={styles.imageBorder}>
        </div>
      </div>
      <div className={styles.rightContent}>
        <p>Minha Jornada</p>
        <img className={styles.imageJourney} src="/images/journey.svg"/>
      </div>
    </motion.div>
  </section>
)
}