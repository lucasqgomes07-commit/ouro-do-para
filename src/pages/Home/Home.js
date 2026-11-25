import { Link } from 'react-router-dom';
import foto from '../../assets/colheita.webp';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.inicio}>
      <div className={styles.texto}>
        <h1 className={styles.chamada}>O açaí é o ouro do Pará</h1>
        <p>Os tipos de açaí que a gente encontra nas batedeiras de Belém.</p>
        <Link to="/tipos" className={styles.acao}>Ver os tipos</Link>
      </div>
      <img src={foto} alt="Cesto com açaí colhido" className={styles.foto} />
    </section>
  );
}

export default Home;
