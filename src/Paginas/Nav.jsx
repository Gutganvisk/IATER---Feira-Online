import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.svg";
import "./Nav.css";

function Nav() {
    return <nav>
        <div className="nav-container">
            <a href="/home" className="nav-link"><img src={logo} alt="Logo" /></a>
            <input type="text" placeholder="Buscar produtos..." className="nav-search" />
            <div className="nav-links">
                <a href="/categorias" className="nav-link">Categorias</a>
                <a href="/regiao" className="nav-link">Região</a>
                <a href="/produtos" className="nav-link">Produtos</a>
            </div>
            <div className="nav-user">
                <a href="/login" className="nav-link"><FaUser /> Login</a>
                <a href="/carrinho" className="nav-link"><FaShoppingCart /> Carrinho</a>
            </div>
        </div>
    </nav>;
}

export default Nav;