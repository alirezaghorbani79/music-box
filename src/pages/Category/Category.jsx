import { useParams } from 'react-router-dom'
import Artists from '../../components/Artists/Artists'
import Loading from '../../components/Loading/Loading'

import { useArtists } from '../../hooks/useApi'

import styles from '../../styles/Pages/Category.module.scss'

const Category = () => {
  const { genre } = useParams()
  const { data, isLoading } = useArtists(genre)

  return (
    <section className={styles.main}>
      <h1>{genre.toUpperCase()}</h1>
      {isLoading && <Loading />}
      <Artists data={data} />
    </section>
  )
}

export default Category
