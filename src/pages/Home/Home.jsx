import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import HomeStyle from './Home.module.css'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <>
        <Header />
        <div className={HomeStyle.home}>
            <div className={HomeStyle.callToAction}>
                <h1>PRECISA DE</h1>
                <h2>UM SITE ?</h2>
                <p>Precisa de uma solução para sua empresa / negócio e não sabe por onde ir? Nós podemos te ajudar!</p>
                
                <div className={HomeStyle.linksToAction}>
                    <Link to="/Solucoes" className={HomeStyle.solucoes}>saiba mais</Link> 
                    ou <Link to="/Contato" className={HomeStyle.contato}>entre em contato</Link>
                </div>  
            </div>
        </div>

        <div className={HomeStyle.bgIlustracao}></div>
        <div className={HomeStyle.illustration}></div>
        <Footer />
        </>
    )
}

export default Home