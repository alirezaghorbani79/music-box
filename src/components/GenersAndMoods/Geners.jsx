import genresImage from '../../assets/images/genres/index'
import genres from '../../data/genres'
import Genre from './Genre'

import styles from '../../styles/GenersAndMoods/Genres.module.scss'

const Geners = () => {
  const genreName = Object.keys(genres)

  const items = genresImage.map((el, index) => {
    const picture = el.default
    return <Genre picture={picture} genreName={genreName[index]} key={index} />
  })

  return (
    <div className={styles.box}>
      <h2>Genres</h2>
      <div className={styles.items}>{items}</div>
    </div>
  )
}

export default Geners
