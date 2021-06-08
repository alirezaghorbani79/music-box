import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import Categories from './pages/Categories/Categories'
import Artist from './pages/Artist/Artist'
import Album from './pages/Album/Album'
import Category from './pages/Category/Category'

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/categories/:genre" component={Category} />
            <Route path="/artists/:id" component={Artist} />
            <Route path="/albums/:id" component={Album} />
          </Layout>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App
