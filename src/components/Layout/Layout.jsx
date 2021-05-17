import Navigation from '../Navigation/Navigation'

import styles from '../../styles/Layout/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout
