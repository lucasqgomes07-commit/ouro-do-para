import styles from './CardAcai.module.css';

function CardAcai({ nome, foto, texto, dica }) {
  return (
    <article className={styles.tipo}>
      <h2 className={styles.nome}>{nome}</h2>
      <img src={foto} alt={`Açaí ${nome}`} className={styles.foto} />
      <p>{texto}</p>
      {dica && <small className={styles.dica}>{dica}</small>}
    </article>
  );
}

export default CardAcai;
