import { useEffect, useRef, useState } from 'react'

import styles from './../../styles/Panel/MobilePlayer.module.scss'
import InfoBox from './InfoBox'
import Icon from '../Icon/IconBtn'

import { ReactComponent as NextSong } from '../../assets/svg/NextSong.svg'
import { useHistory } from 'react-router-dom'

import { ReactComponent as Shuffle } from '../../assets/svg/Shuffle.svg'
import { ReactComponent as Next } from '../../assets/svg/next.svg'
import { ReactComponent as Previous } from '../../assets/svg/previous.svg'
import { ReactComponent as Repeat } from '../../assets/svg/Repeat.svg'

const MobilePlayer = (props) => {
  const progressContainerRef = useRef()
  const history = useHistory()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const unblock = history.block(() => {
      if (open) {
        setOpen(false)
        return false
      }
      return
    })

    return () => {
      unblock()
    }
  }, [open, history])

  const modalHandler = (event) => {
    event.stopPropagation()
    setOpen((prevState) => !prevState)
  }

  const press = (event, ref, callback) => {
    const clientX = event.clientX
    const { left: containerLeftPos, width } =
      ref.current.getBoundingClientRect()

    const currentPosition = (clientX - containerLeftPos) / width

    callback(currentPosition)
  }

  return (
    <>
      <div className={`${styles.modal} ${open ? '' : styles.hidden}`}>
        <div className={styles.modalContainer}>
          <img src={props.song.cover} alt="cover" />
          <h2>{props.song.title}</h2>
          <h3>{props.song.artist_name}</h3>
          <div className={styles.panel}>
            <div
              className={styles.progressContainer}
              onMouseDown={(e) =>
                press(e, progressContainerRef, props.changeTimeHandler)
              }
              ref={progressContainerRef}
            >
              <div className={styles.progressBar} ref={props.progressRef}></div>
            </div>

            <div className={styles.modalButtons}>
              <Icon src={Shuffle} size={18} fill="white" />
              <Icon
                src={Previous}
                size={18}
                fill="white"
                onClick={props.previousHandler}
              />
              <Icon
                src={props.playIcon}
                size={18}
                onClick={props.playHandler}
                fill="white"
              />
              <Icon
                src={Next}
                size={18}
                fill="white"
                onClick={props.nextHandler}
              />
              <Icon src={Repeat} size={18} fill="white" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <div onClick={modalHandler}>
            <InfoBox songInfo={props.song} />
          </div>
          <div className={styles.buttons}>
            <Icon
              src={props.playIcon}
              fill="white"
              size={18}
              onClick={props.playHandler}
            />
            <Icon
              src={NextSong}
              fill="white"
              size={18}
              onClick={props.nextHandler}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobilePlayer
