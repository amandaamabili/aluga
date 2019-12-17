import React, {useState}from 'react';
import api from '../../services/api';

export default function Login({history}){
    const [email, setEmail]= useState('');
//setEmail: atualiza o valor do email


  async function handleSubmit(event){
    event.preventDefault();


    const response = await api.post('/sessions', {
      email
    });

    const {_id}=response.data;

    localStorage.setItem('user',_id);

    history.push('/dashboard');// envia para a proxima pagina, navegação de forma automatica

      //console.log(_id);
    //console.log(response);
    //console.log(email);
  }
    return (
        // <> react permite criar um componente vazio pois ele nao permite dois elementos sem uma div, para nao estragar a estilização com a div pode ser colocado um componente vazio 
        <>
         <p>
          Ofereça <strong>Espaços</strong> para <strong>Eventos</strong> e <strong>Reserve</strong> o melhor para seu <strong>Evento</strong>.

        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> E-mail *</label>
          <input type="email" id="email" placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}/>
        
        <button className="btn" type="submit"> Entrar </button>
        
        </form>

</>
    )
}