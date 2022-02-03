import { Route } from 'react-router-dom'
import Layout from './Layout'

const LayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(Props) => (
        <Layout>
          <Component {...Props} />
        </Layout>
      )}
    />
  )
}

export default LayoutRoute
