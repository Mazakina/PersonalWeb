import { useRouter } from 'next/router'
import styles from './SideNav.module.scss'

export default function SideNav(){
  const {asPath} = useRouter()
  const navIconClass = (id) =>{if(id === asPath){return(styles.navIcon_active)}else{return(styles.navIcon)} } 
  console.log(asPath)
  return(
    <ul className={styles.nav}>
      <div className={styles.navLine}></div>
      <li className={styles.navItem}> <div className={navIconClass('/')}></div></li>
      <li className={styles.navItem}> <div className={styles.navIcon}></div></li>
      <li className={styles.navItem}> <div className={navIconClass('/projects')}></div></li>
      <li className={styles.navItem}> <div className={styles.navIcon}></div></li>
      <li className={styles.navItem}> <div className={navIconClass('/aboutMe')}></div></li>
    </ul>
  )
}