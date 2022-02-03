import Loading from '../Loading/Loading'

import styles from '../../styles/Carousel/Styles.module.scss'

import Slider from './Slider'

import { useTopAlbums } from '../../hooks/useApi'
import Album from './Album'

const TopAlbums = () => {
  const { data: albums, isLoading } = useTopAlbums()

  const item = albums?.map((album) => {
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

  return (
    <section className={styles.box}>
      {isLoading && <Loading />}
      {item && <Slider title="Top albums">{item}</Slider>}
    </section>
  )
}

export default TopAlbums
