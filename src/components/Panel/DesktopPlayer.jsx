import { useRef } from 'react'

import Icon from '../Icon/IconBtn'
import InfoBox from './InfoBox'

import styles from '../../styles/Panel/Player.module.scss'

import { ReactComponent as Shuffle } from '../../assets/svg/Shuffle.svg'
import { ReactComponent as Next } from '../../assets/svg/next.svg'
import { ReactComponent as Previous } from '../../assets/svg/previous.svg'
import { ReactComponent as Repeat } from '../../assets/svg/Repeat.svg'

const Player = (props) => {
  const progressContainerRef = useRef()

  const press = (event) => {
    const clientX = event.clientX
    const { left: containerLeftPos, width } = progressContainerRef.current.getBoundingClientRect()
    
    const currentTime = (clientX - containerLeftPos) / width 

    props.changeTimeHandler(currentTime)
  }



  return (
    <div className={styles.box}>
      <InfoBox />
      <div className={styles.panel}>
        <div className={styles.buttons}>
          <Icon src={Shuffle} size={18} fill="white" />
          <Icon src={Previous} size={18} fill="white" />
          <Icon
            src={props.playIcon}
            size={18}
            onClick={props.playHandler}
            fill="white"
          />
          <Icon src={Next} size={18} fill="white" />
          <Icon src={Repeat} size={18} fill="white" />
        </div>
        <div className={styles.progressContainer} onMouseDown={press} ref={progressContainerRef} >
          <div className={styles.progressBar} ref={props.progressRef} ></div>
        </div>

        
      </div>
    </div>
  )
}

export default Player
