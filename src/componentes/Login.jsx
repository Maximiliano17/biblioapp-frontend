import styles from "../modulos/Login.module.css"
import libro from "../assets/img/libro.png"
import { authApi } from '../api/auth.api';
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

function Login(){
  

 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [datos, setDatos] = useState({
    username: ' ' ,
    password: ' ' ,
    dni: ' '
  })

  function Signin(username, password, dni) {

    axios.post('http://localhost:4000/api/auth/signin', {
      username,
      password,
      dni
    })
    .then((result) => {
      window.location = "home";
    })
    .catch((err) => {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario Incorrecto',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    })

    setUsername('');
    setPassword('');
    setDni('');

  }




  const funcionForm = (event) => {
      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
  }

  const enviar = (event) => {
    event.preventDefault();
        const datos = new FormData(event.target);
           const datosCompletos = Object.fromEntries(datos.entries());
               //console.log(datosCompletos);
              
               Signin(username, password, dni);

//               window.location = "home";
              

              }

  return (
      //Formulario de login
      <>
       <form className={styles.formulario} onSubmit={enviar}> 
         <section className={styles.texto}>
          <span>Biblioteca</span>
           <img src={libro}/>
         </section>
         <section className={styles.inputs}>
           <input name="username"
            placeholder="Ingrese su nombre "
            onChange={e => setUsername(e.target.value)}
            value={username}
            />

           <input name="password"
            placeholder="Ingrese su contraseña" 
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            />

           <input name="dni" 
           placeholder="Ingrese su DNI"
           onChange={e => setDni(e.target.value)}
           value={dni}
           />

         </section>
         <section className={styles.enviar}>
            <button type="submit">
              Ingresar
            </button>
         </section>
       </form>
       <script src="./main.js"></script>
      </>
    )
  }
  
  export default Login;