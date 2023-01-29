import { useState } from "react";
import styles from "../modulos/Register.module.css"
import img from  "../assets/img/perfil.jpg"

function Register (){
      
  const [datos, setDatos] = useState({
    username: ' ' ,
    password: ' ' ,
    dni: ' ',
    phone: ' ',
    email: ' ',
    option: ' '
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
             console.log(datosCompletos);
}

       return(
        <>
       <section className={styles.registro}>
        <form className={styles.formulario} onSubmit={enviar}> 
           <section  className={styles.izquierda}>
             <section className={styles.fotoPerfil}>
                <img src={img}/>
              </section>
              <section className={styles.enviar}>
                <button type="submit">
                  Registrar Usuario
                </button>
            </section>
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

                <input name="phone" 
              placeholder="Ingrese su numero de telefono"
              onChange={funcionForm}
              />

                <input name="email" 
              placeholder="Ingrese su email"
              onChange={funcionForm}
              />
            <section className={styles.opciones}>
              <select name="option"  onChange={funcionForm}>
                  <option disabled>Rol</option>
                  <option value="user">User</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
              </select>
            </section> 
            </section>
       </form>    
              </section>
        </>
       )
}

export default Register;