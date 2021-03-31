import { NavLink } from 'react-router-dom'

import styles from '../../styles/Navigation/NavigationItems.module.scss'

const NavigationItems = () => {
    return (
        <ul className={styles.Items}>
            <li><NavLink to="/" exact activeClassName={styles.Active} >Home</NavLink></li>
            <li><NavLink to="/category" exact activeClassName={styles.Active} >Category</NavLink></li>
            <li><NavLink to="/about" exact activeClassName={styles.Active} >About</NavLink></li>
        </ul>
    )
}

export default NavigationItems
