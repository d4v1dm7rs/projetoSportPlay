import styles from '../css/Empresa.module.css'

function Empresa() {
    return (
        <div className={styles.empresaContainer}>
            <h1>Equipe</h1>
            <div className={styles.empresaContent}>
                <div className={styles.empresaBloco}>
                    <img src="" alt="" />
                    <p>David</p>
                </div>
                <div className={styles.empresaBloco}>
                    <img src="" alt="" />
                    <p>Maria Isabel</p>
                </div>
            </div>
        </div>
    )
}

export default Empresa 