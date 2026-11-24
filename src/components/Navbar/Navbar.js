import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Ouro do Pará</span>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/catalogo" className={styles.link}>Catálogo</Link>
        <Link to="/sobre" className={styles.link}>Sobre</Link>
      </div>
    </nav>
  );
}

export default Navbar;
