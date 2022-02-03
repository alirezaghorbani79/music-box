import styles from '../../styles/Carousel/Styles.module.scss'

import Slider from './Slider'

import { useTopTracks } from '../../hooks/useApi'
import Track from './Track'

const TopTracks = () => {
  const { data: tracks, isLoading } = useTopTracks()

  if (isLoading) return null

  const item = tracks.map((track) => {
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

  if (!item) return null

  return (
    <section className={styles.box}>
      {item && <Slider title="Top tracks">{item}</Slider>}
    </section>
  )
}

export default TopTracks
