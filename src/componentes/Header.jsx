import { Link } from "react-router-dom";
import styles from "../modulos/Header.module.css"
import img from "../assets/img/menu.png";

function Header(){

const Nav = (event) => {
  alert("pito");
}

    return (
      <>
         <header className={styles.header}>
          <section className={styles.logo}>
            <p>Logo</p>
          </section>
          <section className={styles.items}>
            <nav className={styles.lista}>
             <ul> 
              <Link className={styles.link} to="/home">Home</Link>
              <Link className={styles.link} to="/home">Libros</Link>
              <Link className={styles.link} to="/home">Noticias</Link>
              <Link className={styles.link} to="/home">Home</Link>
              <Link className={styles.link} to="/home">Libros</Link>
              <Link className={styles.link} to="/home">Noticias</Link>
             </ul>  
             <section className={styles.nav}>
              <img onClick={Nav} src={img} />
             </section>
            </nav>
          </section>
         </header>
      </>
    )
  }
  
  export default Header;