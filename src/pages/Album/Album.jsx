import { useParams } from 'react-router'
import Albums from '../../components/Albums/Albums'
import AlbumHeader from '../../components/Header/AlbumHeader'
import Playlist from '../../components/Playlist/Playlist'
import { useAlbum } from '../../hooks/useApi'
import styles from '../../styles/Pages/Album.module.scss'

const Album = () => {
  const { id } = useParams()
  const { data } = useAlbum(id)

  if (!data) return null

  const {
    tracks: playlist,
    artist_id,
    artist_name,
    cover,
    release_date,
    tracks_number,
    album_title,
  } = data

  return (
    <section className={styles.container}>
      <div className={styles.cover}>
        <img src={data.cover} alt="" className={styles.background} />
      </div>
      <AlbumHeader
        album_title={album_title}
        cover={cover}
        artist_name={artist_name}
        release_date={release_date}
        tracks_number={tracks_number}
      />
      <Playlist playlist={playlist} />
      <Albums id={artist_id} />
    </section>
  )
}

export default Album
