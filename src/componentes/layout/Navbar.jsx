import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.link}><Link to="/">Home</Link></li>
                <li className={styles.link}><Link to="empresa">Empresa</Link></li>
                <li className={styles.link}><Link to="contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar

