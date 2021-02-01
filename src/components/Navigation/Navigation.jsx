import styles from '../../styles/Navigation/Navigation.module.scss'
import Logo from './Logo'
import NavigationItems from './NavigationItems'

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Logo />
      <NavigationItems />
    </nav>
  )
}

export default Navigation
