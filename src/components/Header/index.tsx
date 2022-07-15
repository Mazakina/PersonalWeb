import styles from './header.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInitialLoad } from '../../contexts/InitalLoad';


export default function Header (){

    const {asPath} = useInitialLoad()
    const [windowWidth, setWindowWidth] =useState(1440)
    if(typeof window !== 'undefined'){
        const { innerWidth: width, innerHeight: height } = window;
        const handleResize = () =>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize,false)
        window.addEventListener("load", handleResize, false);
    }

    const gitStyle={
        marginBottom:'-1px',
    }

    // Framer motion Variants

    const variants = {
        hidden:{left:-30 ,opacity:0,},
        show:{
            left:0,
            opacity:1,
        },
    }
    const item = {
        hidden:{left:-30 ,opacity:0,},
        show:{left:0,opacity:1}
    }




    return(
        <motion.ul 
        className={styles.header}
        variants={variants}
        initial="hidden"
        animate="show"
 
        >
            <motion.li
            variants={item}
            initial={"hidden"}
            animate="show"
            >
                <a target="_blank"  rel="noreferrer" href="https://github.com/Mazakina"><span>&lt; </span>Git <Image style={gitStyle} width='24' height='24' className={styles.svg} src='/images/github2.svg'/> Hub<span> &gt;</span></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paulo-mazakina-1236811b4/">LINKED IN</a>
            </motion.li>
            <motion.li 
            className={styles.homeButton}
            variants={item}
            initial="hidden"
            animate="show"
            >
             <Link href="/">HOME</Link>
            </motion.li>
            <motion.li
            variants={item}
            initial="hidden"
            animate="show"
            >
                <Link href="/projects">PROJECTS</Link>
                <Link href="/aboutMe">SOBRE MIM</Link>
            </motion.li>
        </motion.ul>
    )
}