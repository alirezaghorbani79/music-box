import Navigation from '../Navigation/Navigation'

import styles from '../../styles/Layout/Layout.module.scss'
import Panel from '../Panel/Panel'
import MobileNavigation from '../Navigation/MobileNavigation'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
      <Panel /> 
      <MobileNavigation />
    </>
  )
}

export default Layout
