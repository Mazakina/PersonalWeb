
import { useForm, ValidationError } from '@formspree/react';
import styles from './modalForm.module.scss'
import { useState } from 'react';

export function ModalForm({setModalState}){
  const [state, handleSubmit] = useForm('{your-form-id}')
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [comment, setComment]= useState('')
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  function handleClick(event:PointerEvent) {
    event.stopPropagation();
    return false;
  }
  return(
    <div  className={styles.formModal} onClick={()=>{setModalState(false)}}>
      <form method='post' onSubmit={handleSubmit}  onClick={(event)=>{handleClick(event)}}>
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
    </div>
  )
}