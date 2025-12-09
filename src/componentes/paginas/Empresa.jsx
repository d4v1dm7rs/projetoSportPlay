import stylesEmpresa from '../css/Empresa.module.css'
import fotoIsabel from '../icones/fotoIsabel.jpg'
import fotoDavid from '../icones/fotoDavid.jpg'

function Empresa() {
    return (
        <div className={stylesEmpresa.empresaContainer}>
            <h1>Equipe</h1>
            <div className={stylesEmpresa.empresaContent}>

                <div className={stylesEmpresa.empresaBloco}>
                    <img src={fotoDavid} alt="" />
                    
                    <h2>David</h2>
                    <p>FULL STACK</p>
                </div>

                <div className={stylesEmpresa.empresaBloco}>
                    <img src={fotoIsabel} alt="" />

                    <h2>Maria Isabel</h2>
                    <p>FULL STACK</p>
                </div>
            </div>
        </div>
    )
}

export default Empresa 