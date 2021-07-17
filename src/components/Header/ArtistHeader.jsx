import styles from '../../styles/Header/ArtistHeader.module.scss'

const ArtistHeader = ({ name, cover, nb_fan }) => {
  return (
    <section className={styles.box}>
      <div className={styles.cover}>
        <img src={cover} alt={name} />
      </div>
      <div className={styles.info}>
        <h2>{name}</h2>
      </div>
        <h3>{`${nb_fan} Followers`}</h3>
    </section>
  )
}

export default ArtistHeader
