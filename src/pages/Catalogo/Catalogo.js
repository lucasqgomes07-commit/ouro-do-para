import CardItem from '../../components/CardItem/CardItem';
import styles from './Catalogo.module.css';
import acai1 from '../../assets/acai1.jpg';
import acai2 from '../../assets/acai2.webp';
import acai3 from '../../assets/acai3.jpg';

function Catalogo() {
  return (
    <main className={styles.catalogo}>
      <h1 className={styles.titulo}>Tipos de açaí</h1>
      <div className={styles.grade}>
        <CardItem
          imagem={acai1}
          nome="Açaí Grosso"
          categoria="Especial"
          descricao="Mais polpa e menos água. É o mais encorpado e o mais caro."
          caracteristicas={['Bem espesso', 'Sabor forte', 'Preço mais alto']}
        />
        <CardItem
          imagem={acai2}
          nome="Açaí Médio"
          categoria="Tradicional"
          descricao="Equilíbrio entre polpa e água. Muito comum no dia a dia."
          caracteristicas={['Consistência média', 'Sabor equilibrado', 'Preço médio']}
        />
        <CardItem
          imagem={acai3}
          nome="Açaí Fino"
          categoria="Popular"
          descricao="Leva mais água no preparo. É o mais leve e o mais barato."
          caracteristicas={['Mais líquido', 'Sabor suave', 'Preço mais baixo']}
        />
      </div>
    </main>
  );
}

export default Catalogo;
