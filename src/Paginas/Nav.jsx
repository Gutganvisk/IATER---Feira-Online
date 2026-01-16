import { FaUser} from "react-icons/fa";
import logo from "../assets/logo.svg";
import "./Nav.css";
import "../components/Buttons.css";

function Nav() {
    return (
        <nav className="nav">
            <div className="container nav-container">
                <a className="nav-logo">
                    <img src={logo} alt="IATER" />
                </a>

                <div className="nav-links">
                    <a>Categorias</a>
                    <a>Região</a>
                    <a>Produtos</a>
                </div>
                <div className="nav-actions">
                    <a className="btn btn-primary">
                        <FaUser />Login</a>
                    <a className="btn btn-outline">Cadastro</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;