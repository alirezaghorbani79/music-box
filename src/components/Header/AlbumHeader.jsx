import styles from '../../styles/Header/AlbumHeader.module.scss'

const AlbumHeader = ({ album_title, artist_name, release_date, cover, tracks_number}) => {


  return (
    <section className={styles.box}>
      <div className={styles.cover}>
        <img src={cover} alt={artist_name} />
      </div>
      <div className={styles.info}>
        <p>Album</p>
        <h2>{album_title}</h2>
        <h4>{artist_name}</h4>
        <h5>{`${tracks_number} Songs`}</h5>
      </div>
      <h3>{`Release date: ${release_date}`}</h3>
    </section>
  )
}

export default AlbumHeader
