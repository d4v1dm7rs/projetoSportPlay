import icons from '../icones/iconeCarrinho.svg'
import logo from '../icones/logo.png'
import search from '../icones/pesquisa.png'

import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} alt="" className={styles.logo}/>
            <input type="text" placeholder='Pesquise aqui' className={styles.barraPesquisa}/>
            <div className={styles.icones}>
                <a href=""><img src={search} alt="" className={styles.pesquisar}/></a>
                <a href=""><img src={icons} alt="" className={styles.icon}/></a>
            </div>
        </header>
    )
}

export default Header