import { useState } from 'react'
import { useArtistAlbums } from '../../hooks/useApi'
import styles from '../../styles/Albums/Albums.module.scss'
import Button from '../Button/Button'
import Album from './Album'

const Albums = ({ id }) => {
  const { data: albums, isLoading } = useArtistAlbums(id)

  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle((prevState) => !prevState)
  }

  if (isLoading) return null

  const items = albums.map((album) => {
    const { id, title, release_date, cover_medium: cover } = album

    return (
      <Album
        title={title}
        release_date={release_date}
        cover={cover}
        key={id}
        id={id}
      />
    )
  })

  let albumList = items

  if (items.length > 5 && !toggle) {
    albumList = items.slice(0, 5)
  }

  return (
    <section className={styles.box}>
      <h2>Albums</h2>
      <div className={styles.albums}>{albumList}</div>
      {!toggle && (
        <Button type="outline" onClick={toggleHandler}>
          Show more
        </Button>
      )}
    </section>
  )
}

export default Albums
