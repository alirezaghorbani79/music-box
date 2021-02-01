import { Link } from 'react-router-dom'

import styles from '../../styles/Navigation/Logo.module.scss'

import logo from '../../assets/Logo.png'

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" className={styles.Logo} />
    </Link>
  )
}

export default Logo
