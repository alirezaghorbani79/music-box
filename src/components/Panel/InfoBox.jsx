import React from 'react'

import styles from '../../styles/Panel/InfoBox.module.scss'

const InfoBox = () => {
    return (
        <div className={styles.box}>
            {/* TODO: add song cover to here */}
            <div className={styles.info}>
                <h4>Song name</h4>
                <p>Artist name</p>
            </div>
        </div>
    )
}

export default InfoBox
