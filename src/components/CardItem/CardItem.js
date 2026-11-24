import styles from './CardItem.module.css';

function CardItem({ imagem, nome, categoria, descricao, caracteristicas }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.categoria}>{categoria}</p>
      <p>{descricao}</p>
      <ul className={styles.lista}>
        {caracteristicas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CardItem;
