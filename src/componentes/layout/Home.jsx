import produto from '../imagens/produto1.jpg'

import styles from './Home.module.css'

function Home() {
    return (
        <main>
            <div className={styles.containerGeral}>
                <div className={styles.barraLateral}>
                    <h2>Marca</h2>
                    <input type="text" />
                    <li>
                        <ul>Adidas</ul>
                        <ul>Nike</ul>
                        <ul>Puma</ul>
                        <ul>Fila</ul>
                    </li>
                </div>
                <div className={styles.containerProdutos}>

                    <div className={styles.linhaGrande}>

                        <div className={styles.blocoGrande}>
                            <img src={produto} className={styles.imgProduto} />
                            <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>
                            <p>Tênis esportivo disponível em preto com solado preto e cinza com solado branco e cadarço na cor do
                                calçado. Leve e confortável, é o modelo perfeito para exercícios leves e até mesmo usar no dia a dia.
                            </p>

                            <div className={styles.info}>
                                <h4>2 cores</h4>
                                <h4>7 tamanhos</h4>
                            </div>

                            <h3>R$ 109,99</h3>
                        </div>
                        <div className={styles.blocoGrande}>
                            <img src={produto} className={styles.imgProduto} />
                            <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>
                            <p>Tênis esportivo disponível em preto com solado preto e cinza com solado branco e cadarço na cor do
                                calçado. Leve e confortável, é o modelo perfeito para exercícios leves e até mesmo usar no dia a dia.
                            </p>

                            <div className={styles.info}>
                                <h4>2 cores</h4>
                                <h4>7 tamanhos</h4>
                            </div>

                            <h3>R$ 109,99</h3>
                        </div>
                        <div className={styles.blocoGrande}>
                            <img src={produto} className={styles.imgProduto} />
                            <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>
                            <p>Tênis esportivo disponível em preto com solado preto e cinza com solado branco e cadarço na cor do
                                calçado. Leve e confortável, é o modelo perfeito para exercícios leves e até mesmo usar no dia a dia.
                            </p>

                            <div className={styles.info}>
                                <h4>2 cores</h4>
                                <h4>7 tamanhos</h4>
                            </div>

                            <h3>R$ 109,99</h3>
                        </div>

                    </div>
                    <div className={styles.linhaGrande}>

                        <div className={styles.blocoGrande}>
                            <img src={produto} className={styles.imgProduto} />
                            <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>
                            <p>Tênis esportivo disponível em preto com solado preto e cinza com solado branco e cadarço na cor do
                                calçado. Leve e confortável, é o modelo perfeito para exercícios leves e até mesmo usar no dia a dia.
                            </p>

                            <div className={styles.info}>
                                <h4>2 cores</h4>
                                <h4>7 tamanhos</h4>
                            </div>

                            <h3>R$ 109,99</h3>
                        </div>
                        <div className={styles.blocoGrande}>
                            <img src={produto} className={styles.imgProduto} />
                            <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>
                            <p>Tênis esportivo disponível em preto com solado preto e cinza com solado branco e cadarço na cor do
                                calçado. Leve e confortável, é o modelo perfeito para exercícios leves e até mesmo usar no dia a dia.
                            </p>

                            <div className={styles.info}>
                                <h4>2 cores</h4>
                                <h4>7 tamanhos</h4>
                            </div>

                            <h3>R$ 109,99</h3>
                        </div>
                        <div className={styles.blocoGrande}>
                            <img src={produto} className={styles.imgProduto} />
                            <h2>TÊNIS ESPORTIVO LOOK STAR FEMININO</h2>
                            <p>Tênis esportivo disponível em preto com solado preto e cinza com solado branco e cadarço na cor do
                                calçado. Leve e confortável, é o modelo perfeito para exercícios leves e até mesmo usar no dia a dia.
                            </p>

                            <div className={styles.info}>
                                <h4>2 cores</h4>
                                <h4>7 tamanhos</h4>
                            </div>

                            <h3>R$ 109,99</h3>
                        </div>

                    </div>
                </div>

            </div>

        </main>

    )
}

export default Home