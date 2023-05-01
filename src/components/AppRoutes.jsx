import { BrowserRouter as Router, Routes, Route, Outlet  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Solucoes from "../pages/Solucoes/Solucoes";
import Clientes from "../pages/Clientes/Clientes";
import Contato from "../pages/Contato/Contato";

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Sobre" element={<Sobre />}></Route>
                <Route exact path="/Solucoes" element={<Solucoes />}></Route>
                <Route exact path="/Clientes" element={<Clientes />}></Route>
                <Route exact path="/Contato" element={<Contato />}></Route>
            </Routes>
            <Outlet />
        </Router>
    )
}

export default AppRoutes