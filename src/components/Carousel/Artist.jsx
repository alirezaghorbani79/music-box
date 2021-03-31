import { useHistory } from 'react-router-dom'

import styles from '../../styles/Carousel/Artist.module.scss'

const Artist = ({ name, picture, id }) => {

    const history = useHistory()

    const routeHanler = () => {
        history.push(`/artists/${id}`)
    }


    return (
        <div className={styles.card} onClick={routeHanler} >
            
            <img className={styles.picture} src={picture} alt="Aritst"/>
            <h3 className={styles.name}>{name}</h3>
        </div>
    )
}

export default Artist
