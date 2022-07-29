import { useState } from 'react'
import Tool from '../../components/Tool'
import styles from './projects.module.scss'
import  Image  from 'next/image'
import { useRouter } from 'next/router'

export default function Projects(){
  const {asPath} = useRouter()
  const allProjects = [
    {
      id:0,
      backgroundImg:'/images/projeto1.png',
      tools:['reactJs','html'],
      title:'Portfolio',
      language:'HTML & CSS',
      site:'/#',
      description:' Projeto em React e Next Js, utiliziando Api de Framer Motion para criar transições simples e criativas. Um trabalho que ,como eu, esta sempre em desenvolvimento',
    },{
      id:1,
      backgroundImg:'/images/htmlImg.png',
      tools:['html'],
      title:'Personal Blog',
      language:'HTML & CSS',
      site:'',
  },{
      id:2,
      backgroundImg:'/images/Rect1.png',
      tools:['nextJs','reactJs','stripe','prismic','html'],
      title:'IgNews',
      language: 'Next JS',
      site:'https://ignite-ig-news-main.vercel.app/',
      description:' Trabalho em Next Js para entrega de conteudo DEV com preview antes de se inscrever. Criado com Stripe para pagamentos, Next Auth para validação, e Prismic como CMS '
  },{
      id:3,
      backgroundImg:'/images/projeto2.png',
      tools:['reactJs','prismic','html'],
      title:'IgNews',
      language: 'React JS',
      site:'',
  }]
  const [active, setActive]= useState(true)
  const [currentDisplay,setCurrentDisplay] = useState(0)

 var animated = (asPath === '/projects#' ||'/projects')
 console.log(animated)

  const onClickSetDisplay = (id)=>{
    if(active){return(setActive(false), setCurrentDisplay(id))}
    else{ return}
  }

  return(
    <section className={styles.projects}>
      <div id='projectHeader' >
        <h1>PROJE<span>T</span>OS</h1>
        <div className={styles.underline}></div>
        <div className={styles.underlineTwo}></div>
      </div>

      <div id='projectsDisplay' className={`${styles.projectsDisplay}  + ${(animated ? styles.animatedOne:'')}`}>
        <div id='activeLayer' className={styles.activeLayer}>
          <img height='100%'src={allProjects[currentDisplay].backgroundImg}  alt=""/>
          <div id='descriptionBox' className={`${styles.descriptionBox} + ${(animated ? styles.animatedOne:'')}`}>
            <h2>
              {allProjects[currentDisplay].title}
            </h2>
            <p>{allProjects[currentDisplay].description}</p>

            <div className={styles.iconComponent}>
              <Tool  imgArray={allProjects[currentDisplay].tools} />
            </div>

            <div>
              <button><a target="_blank"  rel="noreferrer" href={allProjects[currentDisplay].site}>Visite o site</a></button>
              <button>GitHub</button>
            </div>
          </div>
          <button onClick={()=>setActive(true)} > <img width='32' height='32' src="/images/shelfIcon.svg" alt="" /></button>
        </div>

{/* display all */}
        <a href="#" id='firstLayer' onClick={()=>{onClickSetDisplay(0)}} className={`${styles.firstLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
            <img className={styles.layerImage} src={allProjects[0].backgroundImg} alt="" />
        </a>

        <a href="#"  id='secondLayer' onClick={()=>{onClickSetDisplay(1)}} className={`${styles.secondLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
          <div id='identifier' className={`${styles.identifier} + ${styles.animatedFive}`}>
            <img className={styles.layerImage} src={allProjects[1].backgroundImg} alt=""/>
            <h3>HTML & CSS</h3>
          </div>
        </a>

        <a href="#" id='thirdLayer' onClick={()=>{onClickSetDisplay(2)}} className={`${styles.thirdLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
          <div id='identifier' className={`${styles.identifier} + ${styles.animatedFive}`}>
            <img className={styles.layerImage} src={allProjects[2].backgroundImg} alt=""/>
            <h3>Java Script</h3>
          </div>       
        </a>
        
        <a href="#" id='fourthLayer' onClick={()=>{onClickSetDisplay(3)}} className={`${styles.fourthLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
          <div id='identifier' className={`${styles.identifier} + ${styles.animatedFive}`}>
            <img id='imageSlow' className={styles.layerImage}  src={allProjects[3].backgroundImg} alt="" />
            <h3>React JS</h3>
          </div>    
        </a>
      </div>
      
    </section>
  )
}
