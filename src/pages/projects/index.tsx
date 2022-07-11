import { motion } from 'framer-motion'
import { useState } from 'react'
import Tool from '../../components/Tool'
import styles from './projects.module.scss'

export default function Projects(){

  const allProjects = [
    {
      id:0,
      backgroundImg:'/images/projeto1.png',
      tools:['reactJs','html'],
      title:'',
      language:'HTML & CSS',
      site:''
    },{
      id:1,
      backgroundImg:'/images/htmlImg.png',
      tools:['html'],
      title:'',
      language:'HTML & CSS',
      site:'',
  },{
      id:2,
      backgroundImg:'/images/Rect1.png',
      tools:['nextJs','reactJs','stripe','prismic','html'],
      title:'IgNews',
      language: 'Next JS',
      site:'https://ignite-ig-news-main.vercel.app/',
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

      <div className={styles.projectsDisplay}>
{/* display selected */}
        <motion.div  className={styles.activeLayer}>
          <img src={allProjects[currentDisplay].backgroundImg}  alt=""/>
          <div className={styles.descriptionBox}>
            <h2>
              IgNews
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi excepturi esse ex odit saepe ipsam facere beatae similique doloremque quo quidem tempore quas molestias, commodi corporis natus possimus atque voluptatem?</p>

            <div className={styles.iconComponent}>
              <Tool  imgArray={allProjects[currentDisplay].tools} />
            </div>

            <div>
              <button><a target="_blank" href={allProjects[currentDisplay].site}>Visite o site</a></button>
              <button>GitHub</button>
            </div>
          </div>
          <button onClick={()=>setActive(true)} > <img src="/images/shelfIcon.svg" alt="" /></button>
        </motion.div>

{/* display all */}
        <a href="#"  onClick={()=>{onClickSetDisplay(0)}} className={`${styles.firstLayer} +  ${(active ? '':styles.deactive)}`}>
            <img src={allProjects[0].backgroundImg} alt="" />
        </a>

        <a href="#"   onClick={()=>{onClickSetDisplay(1)}} className={`${styles.secondLayer} +  ${(active ? '':styles.deactive)}`}>
          <div>
            <img src={allProjects[1].backgroundImg} alt=""/>
            <h3>HTML & CSS</h3>
          </div>
        </a>

        <a href="#" onClick={()=>{onClickSetDisplay(2)}} className={`${styles.thirdLayer} +  ${(active ? '':styles.deactive)}`}>
          <div>
            <img src={allProjects[2].backgroundImg} alt=""/>
            <h3>Java Script</h3>
          </div>       
        </a>
        
        <a href="#" onClick={()=>{onClickSetDisplay(3)}} className={`${styles.fourthLayer} +  ${(active ? '':styles.deactive)}`}>    
          <div>
            <img src={allProjects[3].backgroundImg} alt="" />
            <h3>React JS</h3>
          </div>    
        </a>
      </div>
      
    </section>
  )
}