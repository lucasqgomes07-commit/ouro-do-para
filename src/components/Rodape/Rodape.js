import styles from './Rodape.module.css';

function Rodape({ autor }) {
  return (
    <footer className={styles.base}>
      <strong className={styles.nome}>Ouro do Pará</strong>
      <span>Feito por {autor} · Açaí bom é açaí raiz!!!</span>
    </footer>
  );
}

export default Rodape;
