import { Container } from "./style";
import { Hamburguer } from "../Hamburguer";

export function Header() {
  return (
    <Container>
      <img
        className="logo"
        src="https://www.mbigucci.com.br/wp-content/uploads/2023/09/logo.png"
        alt="Logo da construtora MBIGUCCI"
      />

      <div className="header-items-right">
        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="#">A MBigucci</a>
            </li>
            <li>
              <a href="#">Imóveis à Venda</a>
            </li>
            <li>
              <a href="#">Imóveis para Locação</a>
            </li>
          </ul>
        </nav>
        <a
          className="customer-area"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Área do Cliente
        </a>
        <Hamburguer></Hamburguer>
      </div>
    </Container>
  );
}
