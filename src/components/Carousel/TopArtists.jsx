import styles from '../../styles/Carousel/Styles.module.scss'

import Slider from './Slider'

import { useTopArtists } from '../../hooks/useApi'
import Artist from './Artist'
import Loading from '../Loading/Loading'

const TopArtists = () => {
  const { data: artists, isLoading } = useTopArtists()

  const item = artists?.map((artist) => (
    <Artist
      name={artist.name}
      id={artist.id}
      picture={artist.picture_medium}
      key={artist.id}
    />
  ))

  return (
    <section className={styles.box}>
      {isLoading && <Loading />}
      {item && <Slider title="Top artists">{item}</Slider>}
    </section>
  )
}

export default TopArtists
