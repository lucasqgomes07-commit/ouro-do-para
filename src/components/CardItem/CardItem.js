import styles from './CardItem.module.css';

function CardItem({ nome, categoria, imagem, descricao, caracteristicas }) {
  return (
    <article className={styles.card}>
      <p className={styles.categoria}>{categoria}</p>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <h3 className={styles.nome}>{nome}</h3>
      <p>{descricao}</p>
      <ul>
        {caracteristicas.map((caracteristica) => (
          <li key={caracteristica}>{caracteristica}</li>
        ))}
      </ul>
    </article>
  );
}

export default CardItem;
