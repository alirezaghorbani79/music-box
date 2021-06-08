import { useParams } from 'react-router-dom'

import { useArtists } from '../../hooks/useApi'

import styles from '../../styles/Pages/Category.module.scss'

const Category = () => {
  const { genre } = useParams()
  const { data } = useArtists(genre)

  console.log(data, genre)

  return (
    <section className={styles.main}>
      <h1>{genre.toUpperCase()}</h1>
    </section>
  )
}

export default Category
