import { Container } from "./style";

export function Footer() {
  return (
    <Container>
      <ul className="column-1">
        <li>
          <img
            src="https://www.mbigucci.com.br/wp-content/uploads/2023/09/logo.png"
            alt="logo MBigucci"
          />
          <p>Construindo uma vida melhor!</p>
          <hr />
        </li>
        <li>
          <p>
            Há 40 anos conectamos pessoas a lares perfeitos, oferecendo
            experiência, profissionalismo e excelência em cada transação.
          </p>
        </li>
        <li>
          <p>
            É por isso que fomos eleitos como a Melhor Construtora do Brasil por
            4 vezes consecutives, além de ser reconhecida como a melhor
            incorporadora do país.
          </p>
        </li>
        <li>
          <img
            width="280"
            height="104"
            src="https://www.mbigucci.com.br/wp-content/uploads/2023/09/image-18.png"
            alt=""
          />
        </li>
        <li>
          <p>Av. Senador Vergueiro, 3597</p>
          <p>9° andar - Rudge Ramos</p>
          <p>São Bernardo do Campo - SP</p>
          <p>CEP 09601-000</p>
        </li>
      </ul>
      <ul className="column-2">
        <li>
          <p className="title">A MBigucci</p>
        </li>
        <li>
          <a href="#">Institucional</a>
        </li>
        <li>
          <a href="#">Pacto Global</a>
        </li>
        <li>
          <a href="#">MBIGUCCI News</a>
        </li>
        <li>
          <a href="#">Responsabilidade Ambiental</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul className="column-3">
        <li>
          <p className="title">Empreendimentos</p>
        </li>
        <li>
          <a href="#">Imóveis a venda</a>
        </li>
        <li>
          <a href="#">Compramos seu terreno</a>
        </li>
      </ul>
      <ul className="column-4">
        <li>
          <p className="title">Contatos</p>
        </li>
        <li>
          <p className="subtitle">SAC</p>
          <div className="box-li">
            <span>(11) 97527-3015</span>
            <span>(11) 4040-2765</span>
          </div>
        </li>
        <li>
          <p className="subtitle">Atendimento Financeiro</p>
          <div className="box-li">
            <span>(11) 4040-2765</span>
          </div>
        </li>
        <li>
          <p className="subtitle">Central de Atendimento</p>
          <div className="box-li">
            <span>(11) 5067-6550</span>
          </div>
        </li>
        <li>
          <a href="#">Fale Conosco</a>
        </li>
        <li>
          <a href="#">Trabalhe Conosco</a>
        </li>
        <li>
          <a href="#">Política de Privacidade</a>
        </li>
        <li>
          <img
            src="https://www.mbigucci.com.br/wp-content/uploads/2023/09/selo-associado.png"
            alt=""
          />
        </li>
      </ul>
    </Container>
  );
}
