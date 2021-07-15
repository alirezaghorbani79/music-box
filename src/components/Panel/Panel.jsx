import React, { useRef, useState } from 'react'

import styles from '../../styles/Panel/Panel.module.scss'
import DesktopPlayer from './DesktopPlayer'

import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { ReactComponent as Pause } from '../../assets/svg/pause.svg'


import m from '../../assets/Masoud Sadeghloo - Shab Ahangi.mp3'

const Panel = () => {
    const [isPlaying, setIsPlaying] = useState()
    const audioRef = useRef()
    const progressRef = useRef()

    const playHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play() 
        setIsPlaying((prevState) => !prevState)
    }

    const updateTimeHandler = (event) => {
        const currentTime = event.target.currentTime
        const duration = event.target.duration
        const progressWitdh = currentTime / duration * 100 + '%'

        progressRef.current.style.width = progressWitdh
    }

    const changeTimeHandler = (newTime) => {
        const duration = audioRef.current.duration
        const currentTime = duration * newTime

        audioRef.current.currentTime = currentTime
    }
    
    const playIcon = isPlaying ? Play : Pause


    const props = {
        playHandler, progressRef, changeTimeHandler, playIcon
    }

    return (
        <div className={styles.panel}>
            <audio ref={audioRef} src={m} id='audio' onTimeUpdate={updateTimeHandler} />

            <DesktopPlayer {...props} />
        </div>
    )
}

export default Panel
