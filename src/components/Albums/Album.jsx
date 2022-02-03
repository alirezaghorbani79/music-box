import { Link } from 'react-router-dom'
import styles from '../../styles/Albums/Album.module.scss'

const Album = ({ title, release_date, cover, id }) => {
  return (
    <Link to={`/albums/${id}`}>
      <div className={styles.album}>
        <img src={cover} alt="Album_cover" />
        <h5>{title}</h5>
        <p>Released: {release_date}</p>
      </div>
    </Link>
  )
}

export default Album
