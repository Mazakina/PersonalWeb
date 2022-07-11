import { SvgTriangle } from '../components/SvgTriangle';
import styles from '../styles/Home.module.scss'
import SvgTest from '../components/Grid/index'


export default function Home() {
  const Tz = 16.5;
  return (
        <section className={styles.home}>
          <div className={styles.centerContent}>
                  <SvgTest className={styles.options} />

                  <SvgTriangle polygonClass={'/images/back.png'} className={styles.firstTriangle} Tz={16.5} colors={{fC:"#FE5B00",sC:"#3E1A18"}} offset={{fC:"0%",sC:"100%"}}/>

                  <SvgTriangle className={styles.secondTriangle } Tz={16.5} colors={{fC:"#0F5075",sC:"#FFFFFF0"}} offset={{fC:"0%",sC:"100%"}}/>
            <div className={styles.me}>
              <h1>Paulo Mazakina.</h1>
              <p>Desenvolvedor Front-End.</p>
            </div>             
          </div>
        </section>
        )   
}
