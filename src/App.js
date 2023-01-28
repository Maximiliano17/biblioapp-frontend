import Login from "./componentes/Login";
import styles from "./modulos/App.module.css"

//funcion que renderisa el componente del login
function Formulario(){
  return (
    <>
     <section className={styles.container}>
      <Login />
     </section>
    </>
  )
}

export default Formulario;