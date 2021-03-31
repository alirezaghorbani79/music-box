import styles from '../../styles/Carousel/Styles.module.scss'

import Slider from './Slider'

import { useTopArtists } from '../../hooks/useApi'
import Artist from './Artist'

const TopArtists = () => {
  const { data: artists } = useTopArtists()

  const item = artists?.map((artist) => (
    <Artist name={artist.name} id={artist.id} picture={artist.picture} />
  ))

  if(!item) return null

  return (
    <section className={styles.box}>
      {item && <Slider title="Top artists">{item}</Slider>}
    </section>
  )
}

export default TopArtists
