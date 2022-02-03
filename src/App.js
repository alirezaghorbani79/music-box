import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import Artist from './pages/Artist/Artist'
import Album from './pages/Album/Album'
import Category from './pages/Category/Category'
import PlaylistContextProvider from './Contexts/PlaylistContext'
import NotFound from './pages/NotFound/NotFound'
import LayoutRoute from './components/Layout/LayoutRoute'
import About from './pages/About/About'

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
      <PlaylistContextProvider>
        <Router>
          <Switch>
            <LayoutRoute path="/" exact component={Home} />
            <LayoutRoute path="/categories" exact component={Categories} />
            <LayoutRoute path="/categories/:genre" component={Category} />
            <LayoutRoute path="/artists/:id" component={Artist} />
            <LayoutRoute path="/albums/:id" component={Album} />
            <LayoutRoute path="/about" component={About} />
            <LayoutRoute component={NotFound} />
          </Switch>
        </Router>
      </PlaylistContextProvider>
    </QueryClientProvider>
  )
}

export default App
