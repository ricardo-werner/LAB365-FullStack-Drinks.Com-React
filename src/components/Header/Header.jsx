import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/context";
import logo3 from "/public/imagens/logo3.jpg";

export const Header = () => {
  const context = useProducts();

  return (
    <header className="header__container">
      <div className="header__logo">
        <h1 className="header__page-title"><img src={logo3} alt="logo"/></h1>
      </div>
      <nav className="header__navigation">
        <ul className="header__navlinks">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/usuario">Perfil</Link>
          </li>
        </ul>
      </nav>
      <div>{context.products.length} produto(s) disponível(is)</div>
    </header>
  );
};
