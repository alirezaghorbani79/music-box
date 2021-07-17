import { useState } from 'react'
import { usePlaylistDispatch } from '../../Contexts/PlaylistContext'
import styles from '../../styles/Playlist/Playlist.module.scss'
import { secToMin } from '../../utilities/utilities'
import Button from '../Button/Button'

const Playlist = ({ playlist }) => {
  const [toggle, setToggle] = useState(false)
  const dispatch = usePlaylistDispatch()

  const toggleHandler = () => {
    setToggle((prevState) => !prevState)
  }

  if (!playlist) return null

  
  const playSong = (index) => {
    const payload = {
      playlist,
      index: index
    }
    dispatch({ type: 'play', payload})
  }


  const listItem = playlist.map((song, index) => {
    return (
      <tr key={song.id} onClick={() => playSong(index)} >
        <td>{index + 1}</td>
        <td>
          <img src={song.cover} alt="" />
        </td>
        <td>{song.title}</td>
        <td className={styles.moreInfo} >{song.artist_name}</td>
        <td className={styles.moreInfo} >{song.album_title}</td>
        <td>{secToMin(song.duration)}</td>
      </tr>
    )
  })

  const tableRow = toggle ? listItem : listItem.slice(0, 5)

  const btn = listItem.length > 5 ? (
    <Button type="outline" onClick={toggleHandler}>
      Show more
    </Button>
  ) : null

  return (
    <section className={styles.box}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>TITLE</th>
            <th className={styles.moreInfo} >ARTIST</th>
            <th className={styles.moreInfo} >ALBUM</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
      {!toggle && btn}
    </section>
  )
}

export default Playlist
