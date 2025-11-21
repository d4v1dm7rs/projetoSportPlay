import styles from '../css/Contato.module.css'

function Contato() {
    return(
        <div className={styles.containerGeral}>
            <div className={styles.container}>
                <h1>Contate-nos</h1>

                <div className={styles.content}>
                    <h2>Precisa de ajuda?</h2>
                    <p>Preencha o formulario abaixo</p>
                    
                    <form action="/">
                        <div className={styles.info}>
                            <input type="text" id='nome' placeholder='Primeiro nome'/>
                            <input type="text" id='nome' placeholder='Ultimo nome'/>
                        </div>
                        <div className={styles.info}>
                            <input type="text" id='email' placeholder='E-mail'/>
                            <input type="tel" id='telefone' placeholder='Telefone'/>
                        </div>
                        <div className={styles.info}>
                            <textarea name="Mensagem" id="mensagem" placeholder='Adicione aqui os detalhes do seu problema'></textarea>
                        </div>
                        <div className={styles.info}>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contato