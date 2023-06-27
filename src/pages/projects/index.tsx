import { useEffect, useRef, useState } from 'react'
import Tool from '../../components/Tool'
import styles from './projects.module.scss'
import  Image  from 'next/image'
import { useRouter } from 'next/router'
import { pageChangeOnScroll } from '../../utils/pageChangeOnScroll'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { ArrowDown, ArrowUp } from '../../components/Arrows/Arrows'

export default function Projects(){
  const {asPath} = useRouter()
  const router = useRouter()
 
  let isThrottled = false;
  let lastDirection = 0
  let tickCount = 0
  const PageRef = useRef<HTMLDivElement>()
  const [stateTick,setStateTick] = useState(0)
  
  useEffect(()=>{  
    const pageScrollConfig={
      ref:PageRef,
      isThrottled: isThrottled,
      lastDirection: lastDirection,
      router: router,
      prevAdress:'/',
      tickCount: tickCount,
      nextAdress:'/aboutMe',
      setTickCount:setStateTick,
    }
    pageChangeOnScroll(pageScrollConfig)
  },[])

  const allProjects = [
    {
      id:0,
      backgroundImg:'/images/projeto1.png',
      tools:['reactJs','html'],
      title:'Portfolio',
      language:'HTML & CSS',
      site:'/#',
      description:' Projeto em React e Next Js, utiliziando Api de Framer Motion para criar transições simples. Um trabalho sempre em desenvolvimento',
    },{
      id:1,
      backgroundImgWebp:'/images/htmlImgWebp.webp',
      backgroundImg:'/images/htmlImg.png',
      tools:['html'],
      title:'Space Travel',
      language:'HTML & CSS',
      description:'Space Travel é um site informativo, feito para saciar algumas curiosidade dos amantes do espaço. Utilizando os fundamentos, sem framework, apenas HTML/CSS para criar uma experiencia responsiva e otimizada',
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
      tools:['reactJs','nextJs','prismic','html'],
      title:'Ink-Trail',
      language: 'React JS',
      site:'https://inktrail.vercel.app/',
      description:`Aplicativo JAM-Stack, feito para que artistas brasileiros divulguem suas artes e possiveis clientes entrem em contato. Utilizando de um layout interativo onde se pode arrastar imagens para dentro de albums ou serem deletadas`,
  }]
  const [active, setActive]= useState(true)
  const [currentDisplay,setCurrentDisplay] = useState(0)

 var animated = (asPath === '/projects#' ||'/projects')

  const onClickSetDisplay = (id)=>{
    if(active){return(setActive(false), setCurrentDisplay(id))}
    else{ return}
  }
  const className = `${stateTick!==0? '': styles.displayNone}`
  return(
    <>
    <Head>
      <title>Mazakina Dev | Projetos</title>
    </Head>
    <section ref={PageRef} className={styles.projects}>
      <ArrowUp extendStyleName={`${styles.arrowUp} ${className}`} />
      <div id='projectHeader' >
        <h1> PROJE<span>T</span>OS</h1>
        <div className={styles.underline}></div>
        <div className={styles.underlineTwo}></div>
      </div>
      <div id='projectsDisplay' className={`${styles.projectsDisplay}  + ${(animated ? styles.animatedOne:'')}`}>
        <div id='activeLayer' className={styles.activeLayer}>
          <img height='100%'src={allProjects[currentDisplay].backgroundImg}  alt={`projeto ativo:${allProjects[currentDisplay].title}}`}/>
          <div id='descriptionBox' className={`${styles.descriptionBox} + ${(animated ? styles.animatedOne:'')}`}>
            <h2>
              {allProjects[currentDisplay].title}
            </h2>
            <p>{allProjects[currentDisplay].description}</p>

            <div className={styles.iconComponent}>
              <Tool  imgArray={allProjects[currentDisplay].tools} />
            </div>

            <div className={styles.buttonContainer} >
              <button><a target="_blank"  rel="noreferrer" href={allProjects[currentDisplay].site}>Visite o site</a></button>
              <button>GitHub</button>
            </div>
          </div>
          <button onClick={()=>setActive(true)} > <img width='32' height='32' src="/images/shelfIcon.svg" alt="voltar as opções"/></button>
        </div>

        {/* display all */}
        <a href="#" id='firstLayer' onClick={()=>{onClickSetDisplay(0)}} className={`${styles.firstLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
            <img className={styles.layerImage} src={allProjects[0].backgroundImg} alt={allProjects[0].title} />
        </a>

        <a href="#"  id='secondLayer' onClick={()=>{onClickSetDisplay(1)}} className={`${styles.secondLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
          <div id='identifier' className={`${styles.identifier} + ${styles.animatedFive}`}>
            <img className={styles.layerImage} src={allProjects[1].backgroundImg} alt={allProjects[1].title}/>
            <h3>HTML & CSS</h3>
          </div>
        </a>

        <a href="#" id='thirdLayer' onClick={()=>{onClickSetDisplay(2)}} className={`${styles.thirdLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
          <div id='identifier' className={`${styles.identifier} + ${styles.animatedFive}`}>
            <img className={styles.layerImage} src={allProjects[2].backgroundImg} alt={allProjects[2].title}/>
            <h3>Java Script</h3>
          </div>       
        </a>
        
        <a href="#" id='fourthLayer' onClick={()=>{onClickSetDisplay(3)}} className={`${styles.fourthLayer} +  ${(active ? '':styles.deactive)} + ${(animated ? styles.animatedSeven:'')}`}>
          <div id='identifier' className={`${styles.identifier} + ${styles.animatedFive}`}>
            <img id='imageSlow' className={styles.layerImage}  src={allProjects[3].backgroundImg} alt={allProjects[3].title} />
            <h3>React JS</h3>
          </div>    
        </a>
      </div>
      <ArrowDown extendStyleName={`${styles.arrowDown} ${className}`} />

    </section>
    </>
  )
}
