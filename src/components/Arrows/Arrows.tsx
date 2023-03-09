import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import styles from './Arrows.module.scss'

export function ArrowUp({extendStyleName=''}){
  return (
    <div className={`${extendStyleName} ${styles.container}`}>
      <MdKeyboardArrowUp size={'42px'} className={`${styles.icon} ${styles.arrowUp}`} />
    </div>
  )
}

export function ArrowDown({extendStyleName=''}){
  return (
    <div className={`${extendStyleName} ${styles.container}`}>
      <MdKeyboardArrowDown size={'42px'} className={`${styles.icon} ${styles.arrowDown}`} />
    </div>
  )
}