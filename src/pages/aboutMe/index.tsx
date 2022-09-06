import { motion } from 'framer-motion'
import styles from './aboutMe.module.scss'
import Image from 'next/image'
import { useState } from 'react';

export default function AboutMe (){

  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [comment, setComment]= useState('')
  function handleClick(event) {
    event.stopPropagation();
    console.log(event)
    return false;
  }
  const [modalState, setModalState] = useState(false)
  async function handleOnSubmit(event){
    event.preventDefault();
    const formData = {}
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
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sou Paulo Mazakina,<br/> Desenvolvedor Front-end, Aspirante a designer. 
          <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sempre fui conectado com Arte e Tecnologia, inclusive minhas graduaçoes sempre foram voltadas pra isso, a programação foi onde pude expressar minha logica de forma criativa.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tendo em mente a criaçao de codigos limpos,  performance e a experiencia do usuario.<br/> 
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

    { modalState && 
    <div  className={styles.formModal} onClick={()=>{setModalState(false)}}>
      <form method='post' onSubmit={handleOnSubmit}  onClick={(e)=>{handleClick(e)}}>
        <p>
          <input type="text"
          value={name} 
          onChange={(event)=>{setName(event.target.value)}} 
          placeholder="Nome" name='name'></input>
        </p>
        <p>
          <input value={email} 
          onChange={(event)=>{setEmail(event.target.value)}} 
          type="email" placeholder="E-mail" name='email'></input>
        </p>
        <p>
          <textarea 
          value={comment} 
          onChange={(event)=>{setComment(event.target.value)}} 
          placeholder="Me mande uma mensagem, tambem aceito opniões sobre algo que eu possa melhorar!"  
          name='message'/>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </div>}
  </section>
)
}