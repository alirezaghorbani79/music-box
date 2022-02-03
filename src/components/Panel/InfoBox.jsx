import React from 'react'

import styles from '../../styles/Panel/InfoBox.module.scss'

const InfoBox = ({ songInfo }) => {
  return (
    <div className={styles.box}>
      <img src={songInfo.cover} alt="songCover" />
      <div className={styles.info}>
        <h4>{songInfo.title}</h4>
        <p>{songInfo.artist_name}</p>
      </div>
    </div>
  )
}

export default InfoBox
