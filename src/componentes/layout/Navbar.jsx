import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>Esportes</li>
                <li className={styles.item}>Homens</li>
                <li className={styles.item}>Mulheres</li>
                <li className={styles.item}>Crianças</li>
                <li className={styles.item}>Calçados</li>
                <li className={styles.item}>Roupas</li>
            </ul>
        </nav>
    )
}

export default Navbar

