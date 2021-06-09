import React from 'react'
import Artist from './Artist'

import styles from '../../styles/Artists/Artists.module.scss'

const Artists = ({ data }) => {

    if(!data) return null
    const items = data.map((item) => {
        const { id, name, picture_medium: cover } = item

        return <Artist id={id} name={name} picture={cover} />
    })


    return (
        <section className={styles.box}>
            {items}
        </section>
    )
}

export default Artists
