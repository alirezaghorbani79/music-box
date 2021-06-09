import { Link } from 'react-router-dom'

import styles from '../../styles/Carousel/Genre.module.scss'

const Genre = ({ picture, genreName }) => {

  return (
    <Link to={`/categoies/${genreName}`} >
      <div className={styles.card} >
        <img className={styles.picture} src={picture} alt="Genre_pic" />
      </div>
    </Link>
  )
}

export default Genre
