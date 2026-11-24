import styles from './Sobre.module.css';

function Sobre() {
  return (
    <main className={styles.sobre}>
      <h1 className={styles.titulo}>Sobre</h1>
      <p>
        O Pará é o maior produtor de açaí do Brasil. Por aqui, o açaí não é
        sobremesa: é comida do dia a dia, tomado com farinha d'água e peixe frito.
        Por sua importância na cultura e na economia, é chamado de ouro do Pará.
      </p>
    </main>
  );
}

export default Sobre;
