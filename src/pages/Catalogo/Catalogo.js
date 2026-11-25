import CardAcai from '../../components/CardAcai/CardAcai';
import acai1 from '../../assets/acai1.jpg';
import acai2 from '../../assets/acai2.webp';
import acai3 from '../../assets/acai-fino.jpg';
import styles from './Catalogo.module.css';

function Catalogo() {
  return (
    <section className={styles.vitrine}>
      <h1 className={styles.chamada}>Tipos de açaí</h1>
      <p className={styles.legenda}>O que muda de um para o outro é a quantidade de água na hora de bater.</p>
      <div className={styles.grade}>
        <CardAcai
          nome="Grosso"
          foto={acai1}
          texto="Também chamado de especial. Leva pouca água na hora de bater, então fica bem grosso. É o mais caro."
          dica="Bom pra comer com farinha d'água."
        />
        <CardAcai
          nome="Médio"
          foto={acai2}
          texto="É o que a maioria das pessoas compra no dia a dia."
          dica="O equilíbrio perfeito entre grosso e fino."
        />
        <CardAcai
          nome="Fino"
          foto={acai3}
          texto="Também chamado de popular. Leva mais água e é o mais barato."
          dica="Mais fácil de tomar no copo."
        />
      </div>
    </section>
  );
}

export default Catalogo;
