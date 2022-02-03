import styles from '../../styles/Carousel/Styles.module.scss'

import Slider from './Slider'

import { useTopAlbums } from '../../hooks/useApi'
import Album from './Album'

const TopAlbums = () => {
  const { data: albums, isLoading } = useTopAlbums()

  if (isLoading) return null

  const item = albums.map((album) => {
    const { title: name } = album
    const { name: artist_name } = album.artist
    const { cover_medium: cover, id } = album

    return (
      <Album
        key={id}
        id={id}
        name={name}
        picture={cover}
        artist_name={artist_name}
      />
    )
  })

  if (!item) return null

  return (
    <section className={styles.box}>
      {item && <Slider title="Top albums">{item}</Slider>}
    </section>
  )
}

export default TopAlbums
