import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const estiloLink = ({ isActive }) => (isActive ? styles.ativo : styles.item);

  return (
    <header className={styles.topo}>
      <Link to="/" className={styles.marca}>Ouro do Pará</Link>
      <nav className={styles.atalhos}>
        <NavLink to="/" end className={estiloLink}>Home</NavLink>
        <NavLink to="/tipos" className={estiloLink}>Tipos</NavLink>
        <NavLink to="/por-que-acai" className={estiloLink}>Sobre</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
