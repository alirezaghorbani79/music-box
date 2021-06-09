import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Artists/Artist.module.scss'

const Artist = ({ name, picture, id }) => {


    return (
        <Link to={`/artists/${id}`} >
          <div className={styles.card}>
            <img className={styles.picture} src={picture} alt="Aritst" />
            <h3 className={styles.name}>{name}</h3>
          </div>
        </Link>
      )
}

export default Artist
