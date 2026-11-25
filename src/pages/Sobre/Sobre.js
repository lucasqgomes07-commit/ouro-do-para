import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.historia}>
      <h1 className={styles.chamada}>Por que açaí?</h1>
      <p>
        Escolhi esse tema porque aqui em Belém o açaí faz parte do almoço. O Pará é o
        maior produtor de açaí do Brasil, e muita família vive da colheita e da venda
        nas batedeiras.
      </p>
      <aside className={styles.destaque}>
        Diferente do resto do país, aqui o açaí não leva granola nem leite condensado:
        a gente toma com farinha d'água, tapioca, peixe frito ou charque.
      </aside>
    </section>
  );
}

export default Sobre;
