import styles from './header.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Header (){

    const [windowWidth, setWindowWidth] =useState(1440)

    if(typeof window !== 'undefined'){
        const { innerWidth: width, innerHeight: height } = window;
        const handleResize = () =>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize,false)
        window.addEventListener("load", handleResize, false);
    }

    return(
        <header className={styles.header}>
            <div>
                <a target="_blank" href="https://github.com/Mazakina"><span>&lt; </span>Git <img className={styles.svg} src='/images/github2.svg'/> Hub<span> &gt;</span></a>
                <a target="_blank" href="https://www.linkedin.com/in/paulo-mazakina-1236811b4/">LINKED IN</a>
            </div>
            <div className={styles.homeButton}  >
             <Link href="/">HOME</Link>
            </div>
            <div>
                <Link href="/projects">PROJECTS</Link>
                <Link href="/aboutMe">SOBRE MIM</Link>
            </div>
        </header>
    )
}