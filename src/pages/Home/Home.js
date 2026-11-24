import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.home}>
      <h1 className={styles.titulo}>O açaí é o ouro do Pará</h1>
      <p>Da palmeira para a mesa: conheça o fruto que é a cara do Pará.</p>
      <Link to="/catalogo" className={styles.botao}>Ver tipos de açaí</Link>
    </main>
  );
}

export default Home;
