import { motion } from 'framer-motion'
import styles from './aboutMe.module.scss'
import Image from 'next/image'
import { useState } from 'react';

export default function AboutMe (){

  function handleClick(event) {
    event.stopPropagation();
    console.log(event)
    return false;
  }
  const [modalState, setModalState] = useState(false)
  async function handleOnSubmit(e){
    event.preventDefault();
    const formData={}
  }
return(
  <section className={styles.aboutMe}>
    <h2>SOBRE MIM</h2>
    <motion.div 
    drag
    dragSnapToOrigin={true}
    dragElastic={0.5}
    dragConstraints={{top:0,left:0,right:0,bottom:0}}
    className={styles.aboutBox}>

      <div className={styles.leftContent}>
        <div className={styles.description}>
          <p> &nbsp; Sou Paulo Mazakina, Desenvolvedor <br/>Front-end, Aspirante a Designer. 
          <br/><br/>&nbsp;Sempre fui conectado com Tecnologia e Arte, inclusive minhas graduaçoes sempre foram voltadas pra isso, a programação foi onde pude expressar minha logica de forma criativa.<br/>
            &nbsp;Tendo em mente a criaçao de codigos limpos,  performance e a experiencia do usuario.<br/> 
          </p>
        </div>
        <div className={styles.openModalButton}>
          <button onClick={()=>{setModalState(true)}}>Contato</button>
        </div>
      </div>

      <div className={styles.centerContent}>
      <img className={styles.midAbt} src="/images/midAbt.svg"/>
        <div className={styles.imageBorder}>
        </div>
      </div>

      <div className={styles.rightContent}>
        <p>Minha Jornada</p>
        <img className={styles.imageJourney} src="/images/journey.svg"/>
      </div>
    </motion.div>

    { modalState ? 
    <div className={styles.formModal} onClick={()=>{setModalState(false)}}>
      <form method='post' onSubmit={handleOnSubmit}  onClick={(e)=>{handleClick(e)}}>
        <p>
          <input type="text" placeholder="Nome" name='name'></input>
        </p>
        <p>
          <input type="email" placeholder="E-mail" name='email'></input>
        </p>
        <p>
          <textarea placeholder="Me mande uma mensagem, tambem aceito opniões sobre algo que eu possa melhorar!"  name='message'/>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </div>: ''}
  </section>
)
}