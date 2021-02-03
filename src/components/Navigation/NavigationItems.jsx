import { NavLink } from 'react-router-dom'

import styles from '../../styles/Navigation/NavigationItems.module.scss'

const NavigationItems = () => {
    return (
        <ul className={styles.Items}>
            <li><NavLink to="/" exact activeClassName={styles.Active} > Home</NavLink></li>
            <li><NavLink to="/browse" exact activeClassName={styles.Active} >Browse</NavLink></li>
            <li><NavLink to="/library" exact activeClassName={styles.Active} >Library</NavLink></li>
        </ul>
    )
}

export default NavigationItems
