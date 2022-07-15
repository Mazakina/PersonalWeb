import { SvgTriangle, SvgTriangleImg } from '../components/SvgTriangle';
import styles from '../styles/Home.module.scss'
import SvgTest from '../components/Grid/index'
import { useInitialLoad } from '../contexts/InitalLoad';


export default function Home() {

  const {isInitialLoad} = useInitialLoad()

  
  return (
        <section className={styles.home}>
          <div className={styles.centerContent}>
                  <SvgTest className={styles.options} />
  
                  <SvgTriangleImg polygonClass={'/images/back.png'} className={styles.firstTriangle} sizeMultiplier={16.5} colors={{firstColor:"#FE5B00",secondColor:"#3E1A18"}} offset={{firstColor:"0%",secondColor:"100%"}}/>

                  <SvgTriangle className={styles.secondTriangle } sizeMultiplier={16.5} colors={{firstColor:"#0F5075",secondColor:"#FFFFFF0"}} offset={{firstColor:"0%",secondColor:"100%"}}/>
            <div className={styles.me}>
              <h1>Paulo Mazakina.</h1>
              <p>Desenvolvedor Front-End.</p>
            </div>             
          </div>
        </section>
        )   
}
