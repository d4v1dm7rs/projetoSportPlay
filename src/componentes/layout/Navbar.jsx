import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}><a href="" className={styles.link}>Esportes</a></li>
                <li className={styles.item}><a href="" className={styles.link}>Homens</a></li>
                <li className={styles.item}><a href="" className={styles.link}>Mulheres</a></li>
                <li className={styles.item}><a href="" className={styles.link}>Crianças</a></li>
                <li className={styles.item}><a href="" className={styles.link}>Calçados</a></li>
                <li className={styles.item}><a href="" className={styles.link}>Roupas</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

