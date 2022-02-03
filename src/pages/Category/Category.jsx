import { useParams } from 'react-router-dom'
import Artists from '../../components/Artists/Artists'

import { useArtists } from '../../hooks/useApi'

import styles from '../../styles/Pages/Category.module.scss'

const Category = () => {
  const { genre } = useParams()
  const { data } = useArtists(genre)

  return (
    <section className={styles.main}>
      <h1>{genre.toUpperCase()}</h1>
      <Artists data={data} />
    </section>
  )
}

export default Category
