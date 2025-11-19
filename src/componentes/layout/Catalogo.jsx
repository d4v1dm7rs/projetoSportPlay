import produto from '../imagens/produto1.jpg'
import produto2 from '../imagens/bolaDeBasquete.jpg'
import produto3 from '../imagens/chuteira.jpg'
import produto4 from '../imagens/jaqueta.jpg'
import produto5 from '../imagens/creatina.jpg'
import produto6 from '../imagens/meias.jpg'
import produto7 from '../imagens/tenisBasquete.jpg'

import styles from '../css/Catalogo.module.css'

function Catalogo() {
    return(
        <div className={styles.container}>
            
            <div className={styles.containerProdutos}>

                <div className={styles.card}>
                    <img src={produto} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>

                        <div className={styles.info}>
                            <h4>2 cores</h4>
                            <h4>7 tamanhos</h4>
                        </div>

                        <h3>R$109,99</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={produto2} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>BOLA DE BASQUETE WILSON NBA DRV</h2>

                        <div className={styles.info}>
                            <h4>Out-Door/In-Door</h4>
                            <h4>Tamanho 7</h4>
                        </div>

                        <h3>R$89,99</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={produto3} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>CHUTEIRA DE CAMPO ADULTO ADIDAS F50 ELITE</h2>

                        <div className={styles.info}>
                            <h4>2 cores</h4>
                            <h4>3 tamanhos</h4>
                        </div>

                        <h3>R$1034,99</h3>
                        
                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerProdutos}>

                <div className={styles.card}>
                    <img src={produto4} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>JAQUETA CORTA-VENTO MASCULINA</h2>

                        <div className={styles.info}>
                            <h4>2 cores</h4>
                            <h4>4 tamanhos</h4>
                        </div>

                        <h3>R$118,74</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={produto5} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>CREATINA NUTRATA UP MONOHIDRATADA - 300g</h2>

                        <div className={styles.info}>
                            <h4>Natural</h4>
                            <h4>300g</h4>
                        </div>

                        <h3>R$53,50</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={produto6} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>KIT MEIAS CANO MÉDIO PUMA 3 PARES</h2>

                        <div className={styles.info}>
                            <h4>2 Cores</h4>
                            <h4>4 Tamanhos</h4>
                        </div>

                        <h3>R$39,99</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerProdutos}>

                <div className={styles.card}>
                    <img src={produto7} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>TÊNIS ADIDAS ANTONHY EDWARDS 1 LOW</h2>

                        <div className={styles.info}>
                            <h4>5 Cores</h4>
                            <h4>2 Tamanhos</h4>
                        </div>

                        <h3>R$854,99</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={produto} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>

                        <div className={styles.info}>
                            <h4>2 cores</h4>
                            <h4>7 tamanhos</h4>
                        </div>

                        <h3>R$109,99</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={produto} className={styles.imgProduto}/>
                    
                    <div className={styles.conteudo}>
                        
                        <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>

                        <div className={styles.info}>
                            <h4>2 cores</h4>
                            <h4>7 tamanhos</h4>
                        </div>

                        <h3>R$109,99</h3>

                        <div className={styles.btn}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalogo

