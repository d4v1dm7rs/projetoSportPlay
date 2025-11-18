import styles from './Footer.module.css'
import visa from '../imagens/visa.png'
import master from '../imagens/master.png'
import diners from '../imagens/diners.jpg'
import elo from '../imagens/elo.png'
import american from '../imagens/american.png'
import hiper from '../imagens/hiper.png'
import pix from '../imagens/pix.png'

function Footer() {
    return(
        <footer>
            <div className={styles.all}>
                <div className={styles.column}>
                    <h1> Sobre</h1>
                    <ul>
                        <li className={styles.text}> Empresa </li>
                        <li className={styles.text}> Equipe </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h1> Central de Atendimento </h1>
                    <ul>
                        <li className={styles.text}> Acompanhe o seu pedido </li>
                        <li className={styles.text}> Dúvidas frequentes </li>
                        <li className={styles.text}> Fale conosco </li>
                        <li className={styles.text}> Troca e arrependimento </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h1> Formas de Pagamentos </h1>
                    <ul className={styles.bandeira}>
                        <li><img src={visa} alt="1" className={styles.card} /></li>
                        <li><img src={master} alt="2" className={styles.card}/></li>
                        <li><img src={diners} alt="3" className={styles.card}/></li>
                        <li><img src={elo} alt="4" className={styles.card}/></li>
                        <li><img src={american} alt="5" className={styles.card}/></li>
                        <li><img src={hiper} alt="6" className={styles.card}/></li>
                        <li><img src={pix} alt="7" className={styles.card}/></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h1> Redes Sociais </h1>
                    <a href=""><img src="" alt="" /> Facebook </a>
                    <a href=""> Instagram </a> 
                    <a href=""> Youtube </a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer