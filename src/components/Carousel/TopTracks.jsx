import styles from '../../styles/Carousel/Styles.module.scss'

import Slider from './Slider'

import { useTopTracks } from '../../hooks/useApi'
import Track from './Track'
import Loading from '../Loading/Loading'

const TopTracks = () => {
  const { data: tracks, isLoading } = useTopTracks()

  const item = tracks?.map((track) => {
    const { title: name, preview } = track
    const { name: artist_name } = track.artist
    const { cover_medium: cover, id } = track.album

    return (
      <Track
        artist_name={artist_name}
        id={id}
        key={id}
        name={name}
        picture={cover}
        preview={preview}
      />
    )
  })

  return (
    <section className={styles.box}>
      {isLoading && <Loading />}
      {item && <Slider title="Top tracks">{item}</Slider>}
    </section>
  )
}

export default TopTracks
