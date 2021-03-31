import Layout from '../../components/Layout/Layout'
import TopArtists from '../../components/Carousel/TopArtists'
import Genres from '../../components/Carousel/Genres'

const Home = () => {
  return (
    <Layout>
      <Genres />
      <TopArtists />
    </Layout>
  )
}

export default Home
