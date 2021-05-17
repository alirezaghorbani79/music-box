import { useState } from 'react'
import styles from '../../styles/Playlist/Playlist.module.scss'
import { secToMin } from '../../utilities/utilities'
import Button from '../Button/Button'

const Playlist = ({ playlist }) => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {
    setToggle((prevState) => !prevState)
  }

  if (!playlist) return null


  const listItem = playlist.map((song, index) => {
    return (
      <tr key={song.id}>
        <td>{index + 1}</td>
        <td>
          <img src={song.cover} alt="" />
        </td>
        <td>{song.title}</td>
        <td>{song.artist_name}</td>
        <td>{song.album_title}</td>
        <td>{secToMin(song.duration)}</td>
      </tr>
    )
  })

  const tableRow = toggle ? listItem : listItem.slice(0, 5)

  return (
    <section className={styles.box}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>TITLE</th>
            <th>ARTIST</th>
            <th>ALBUM</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
      {!toggle && (
        <Button type="outline" onClick={toggleHandler}>
          Show more
        </Button>
      )}
    </section>
  )
}

export default Playlist
