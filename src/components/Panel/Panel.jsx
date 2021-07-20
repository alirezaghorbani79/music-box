import React, { useEffect, useRef, useState } from 'react'

import DesktopPlayer from './DesktopPlayer'
import MobilePlayer from './MobilePlayer'
import { Desktop, Mobile } from '../Responsive/Responsive'

import { ReactComponent as Play } from '../../assets/svg/play.svg'
import { ReactComponent as Pause } from '../../assets/svg/pause.svg'

import { usePlaylistDispatch, useSong } from '../../Contexts/PlaylistContext'

const Panel = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef()
  const progressRef = useRef()
  const volumeRef = useRef()

  const dispatch = usePlaylistDispatch()
  const song = useSong()
  useEffect(() => {
    if (song && !isPlaying) {
      audioRef.current.play()
      setIsPlaying((prevState) => !prevState)
    } else if (song && isPlaying) {
      audioRef.current.play()
    }
  }, [song])

  if (!song) return null

  const playHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying((prevState) => !prevState)
  }

  const nextHandler = () => {
    dispatch({ type: 'next' })
  }

  const previousHandler = () => {
    dispatch({ type: 'previous' })
  }

  const endHandler = () => {
    dispatch({ type: 'end' })
  }

  const updateTimeHandler = (event) => {
    const currentTime = event.target.currentTime
    const duration = event.target.duration
    const progressWitdh = (currentTime / duration) * 100 + '%'

    if (progressRef.current) {
      console.log(progressRef)
      progressRef.current.style.width = progressWitdh
    }
    

  }

  const changeTimeHandler = (newTime) => {
    const duration = audioRef.current.duration
    const currentTime = duration * newTime

    audioRef.current.currentTime = currentTime
  }

  const changeVolumeHandler = (newVol) => {
    const newWidth = newVol * 100 + '%'

    volumeRef.current.style.width = newWidth
    audioRef.current.volume = newVol
  }

  const playIcon = isPlaying ? Pause : Play

  const props = {
    playHandler,
    progressRef,
    changeTimeHandler,
    playIcon,
    changeVolumeHandler,
    volumeRef,
    song,
    nextHandler,
    previousHandler,
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={song.preview}
        id="audio"
        onTimeUpdate={updateTimeHandler}
        onEnded={endHandler}
      />

      <Desktop>
        <DesktopPlayer {...props} />
      </Desktop>

      <Mobile>
        <MobilePlayer {...props} />
      </Mobile>
    </>
  )
}

export default Panel
