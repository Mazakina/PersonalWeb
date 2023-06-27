import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {MdOutlineViewHeadline} from 'react-icons/md'
import styles from './ModalHeader.module.scss'
export default function ModalHome(){

  const gitStyle={
    marginBottom:'-1px',
  }

  const [modalHeader, setModalHeader] = useState(false)

  return(
    <>
      <button onClick={()=>{setModalHeader(!modalHeader)}} className={styles.headerButton}><MdOutlineViewHeadline/></button>
      
      <motion.div  className={`${styles.modalHeader}  + ${(modalHeader ? styles.active:styles.deactive)}`} >
        <ul>
          <button onClick={()=>setModalHeader(!modalHeader)} className={styles.headerButton}><MdOutlineViewHeadline/></button>
          <div className={styles.division} />
          <li ><a target="_blank"  rel="noreferrer" href="https://github.com/Mazakina"><span>&lt; </span>Git <Image style={gitStyle} width='24' height='24' className={styles.svg} src='/images/github2.svg'/> Hub<span> &gt;</span></a></li>
          <div className={styles.division} />
          <li ><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paulo-mazakina-1236811b4/">LINKED IN</a></li>
          <div className={styles.division} />
          <li onClick={()=>setModalHeader(!modalHeader)}><Link href="/">HOME</Link></li>
          <div className={styles.division} />
          <li onClick={()=>setModalHeader(!modalHeader)}><Link href="/projects">PROJETOS</Link></li>
          <div className={styles.division} />
          <li onClick={()=>setModalHeader(!modalHeader)}><Link href="/aboutMe">SOBRE MIM</Link></li>
          <div className={styles.division} />
        </ul>
      </motion.div>
    </>
  )
}