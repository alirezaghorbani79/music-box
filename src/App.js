import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import Category from './pages/Category/Category'
import Artist from './pages/Artist/Artist'
import Album from './pages/Album/Album'

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
            <Route path="/category" exact component={Category} />
            <Route path="/artists/:id" component={Artist} />
            <Route path="/albums/:id" component={Album} />
          </Layout>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App
