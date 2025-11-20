import icons from '../icones/iconeCarrinho.svg'
import logo from '../icones/logo.png'
import search from '../icones/pesquisa.png'

import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="" className={styles.logo}/>
            <input type="text" placeholder='Pesquise aqui' className={styles.barraPesquisa}/>
            <a href=""><img src={search} alt="" className={styles.pesquisar}/></a>
            <a href=""><img src={icons} alt="" className={styles.icon}/></a>
        </header>
    )
}

export default Header