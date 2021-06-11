import { Link } from "react-router-dom"

import styles from '../../styles/Carousel/Track.module.scss'

const Track = ({ id, name, picture, artist_name, preview }) => {
    return (
        <Link to={`/albums/${id}`} >
          <div className={styles.card}>
            <img className={styles.picture} src={picture} alt="Aritst" />
            <h3 className={styles.name} >{name}</h3>
            <h5 className={styles.artist_name} >{artist_name}</h5>
          </div>
        </Link>
      )
}

export default Track
