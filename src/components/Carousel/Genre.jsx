import { useHistory } from 'react-router-dom'

import styles from '../../styles/Carousel/Genre.module.scss'

const Genre = ({ picture, genreName }) => {

    const history = useHistory()

    const routeHanler = (genre) => {
        history.push(`/category/${genre}`)
    }

    return (
        <div className={styles.card} onClick={() => routeHanler(genreName)}>
            <img className={styles.picture} src={picture} alt="Genre_pic"/>
        </div>
    )
}

export default Genre
