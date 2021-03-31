import styles from '../../styles/Carousel/Styles.module.scss'
import Slider from './Slider'

import genresImage from '../../assets/images/genres/index'
import genres from '../../data/genres'
import Genre from './Genre'

const Genres = () => {
  const imageList = genresImage.slice(7)
  const genreName = Object.keys(genres).slice(7)

  const item = imageList.map((el, index) => {
    const picture = el.default
    return <Genre picture={picture} genreName={genreName[index]} />
  })

  return (
    <section className={styles.box}>
      {item && <Slider title="Gernres">{item}</Slider>}
    </section>
  )
}

export default Genres
