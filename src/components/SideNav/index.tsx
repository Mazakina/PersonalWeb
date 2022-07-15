import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import styles from './SideNav.module.scss'

export default function SideNav(){
  const {asPath} = useRouter()
  const navIconClass = (id) =>{if(id === asPath){return(styles.navIcon_active)}else{return(styles.navIcon)} } 
  
  
  const variants = {
    hidden:{opacity:0},
    show:{opacity:1,}
  }

  const item = {
    hidden:{scale:0,
    transition:{duration:1}
    },
    show:{scale:1,
      transition:{duration:1}
    },
  }

  return(
    <motion.ul className={styles.nav}
    variants={variants}
    initial="hidden"
    animate="show"
    
    >
      <motion.div className={styles.navLine}></motion.div>
      <motion.li variants={item} initial="hidden" animate="show" className={styles.navItem}> <div className={navIconClass('/')}></div></motion.li>
      <motion.li variants={item} initial="hidden" animate="show" className={styles.navItem}> <div className={styles.navIcon}></div></motion.li>
      <motion.li variants={item} initial="hidden" animate="show" className={styles.navItem}> <div className={navIconClass('/projects')}></div></motion.li>
      <motion.li variants={item} initial="hidden" animate="show" className={styles.navItem}> <div className={styles.navIcon}></div></motion.li>
      <motion.li variants={item} initial="hidden" animate="show" className={styles.navItem}> <div className={navIconClass('/aboutMe')}></div></motion.li>
    </motion.ul>
  )
}