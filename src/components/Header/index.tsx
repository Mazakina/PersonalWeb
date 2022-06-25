import styles from './header.module.scss'
import {DiGithub} from 'react-icons/di'


export default function Header (){
    return(
        <header className={styles.header}>
            <div>
                <a href="">HOME</a>
                <a href="">PROJETOS</a>
                <a href="">SOBRE MIM</a>
            </div>
            <div>
                <a href="">LINKED IN</a>
                <a href=""><span>&lt; </span>Git <DiGithub className={styles.VscGithub}/> Hub<span> &gt;</span></a>
            </div>
        </header>
    )
}