import { useParams } from 'react-router-dom'
import Albums from '../../components/Albums/Albums'
import ArtistHeader from '../../components/Header/ArtistHeader'
import Playlist from '../../components/Playlist/Playlist'

import { useArtistInfo, useArtistPlaylist } from '../../hooks/useApi'

import styles from '../../styles/Pages/Artist.module.scss'

const Artist = () => {
  const { id } = useParams()
  const { data: artist, isLoading } = useArtistInfo(id)
  const { data: playlist } = useArtistPlaylist(id)

  if (isLoading) return null

  return (
    <section className={styles.container}>
      <div className={styles.cover}>
        <img src={artist.cover} alt="" className={styles.background} />
      </div>

      {artist && (
        <ArtistHeader
          name={artist.name}
          cover={artist.cover}
          nb_fan={artist.nb_fan}
        />
      )}

      {playlist && <Playlist playlist={playlist} />}
      <Albums id={id} />
    </section>
  )
}

export default Artist
