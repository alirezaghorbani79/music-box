import styles from '../../styles/Navigation/MobileNavigation.module.scss'

import { ReactComponent as Home } from '../../assets/svg/home.svg'
import { ReactComponent as Category } from '../../assets/svg/Library.svg'
import IconBtn from '../Icon/IconBtn'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <NavLink to="/" exact activeClassName={styles.active}>
          <IconBtn src={Home} size={35} fill="#e1e1e1" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/categories" activeClassName={styles.active}>
          <IconBtn src={Category} size={35} fill="#e1e1e1" />
        </NavLink>
      </div>
    </nav>
  )
}

export default MobileNavigation
