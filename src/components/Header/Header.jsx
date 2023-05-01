import HeaderStyle from './Header.module.css';
import MainLogo from '../../assets/images/caio_gonzales_logo_oficial.png';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className={HeaderStyle.header}>
            <div className={HeaderStyle.logo}>
                <img src={MainLogo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Solucoes">Soluções</Link></li>
                    <li><Link to="/Clientes">Clientes</Link></li>
                    <li><Link to="/Contato" className={HeaderStyle.contato}>Contato</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header