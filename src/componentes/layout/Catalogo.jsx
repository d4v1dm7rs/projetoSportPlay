import produto from '../imagens/produto1.jpg'

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

                        <button>Comprar</button>
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
                    </div>
                </div>
            </div>

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
                    </div>
                </div>
            </div>

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalogo

