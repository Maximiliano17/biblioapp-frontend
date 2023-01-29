import styles from "../modulos/Login.module.css"
import libro from "../assets/img/libro.png"
import { useState } from "react";


function Login(){
  
  const [datos, setDatos] = useState({
    username: ' ' ,
    password: ' ' ,
      dni: ' '
  })

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
            onChange={funcionForm}
            />

           <input name="password"
            placeholder="Ingrese su contraseña" 
            type="password"
            onChange={funcionForm}
            />

           <input name="dni" 
           placeholder="Ingrese su DNI"
           onChange={funcionForm}
           />

         </section>
         <section className={styles.enviar}>
            <button type="submit">
              Ingresar
            </button>
         </section>
       </form>
      </>
    )
  }
  
  export default Login;