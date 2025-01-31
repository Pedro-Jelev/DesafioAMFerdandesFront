import { Container } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Jabaquara() {
  return (
    <Container>
      <Header />

      <img
        className="banner"
        src="https://www.mbigucci.com.br/wp-content/uploads/2024/04/Copia-de-WhatsApp-Image-2021-04-06-at-14.59.08-14.jpeg"
        alt="Imagem do empreendimento"
      />

      <div className="banner-info">
        <h1>Station MBigucci</h1>
        <p>Sua próxima parada é aqui</p>
        <div className="ep-details">
          <div className="local">
            <img
              src="https://cdn-icons-png.flaticon.com/512/106/106121.png"
              alt="icone de localização"
            />
            <p>JABAQUARA</p>
          </div>
          <div className="characteristics">
            <p className="area">37 a 48m²</p>
            <p className="dorm">1 ou 2 dorm(s)</p>
            <p className="vacancies">1 vaga(s)</p>
          </div>
          <a href="#" target="_blank" className="learn-more">
            SAIBA MAIS
          </a>
        </div>
      </div>

      <main>
        <section className="description">
          <div className="description_content">
            <span className="tag-status">PRONTO</span>
            <h2>PARA MORAR OU INVESTIR, O STATION É A SUA MELHOR OPÇÃO</h2>
            <hr />
            <p>
              Que tal morar a apenas 5min andando do metrô com tudo o que você
              precisa a sua volta? Mercados, escolas, bancos, bares,
              restaurantes, hospitais e uma comunidade de serviços. E o que é
              melhor, em um empreendimento diferenciado, prático e especialmente
              projetado para atender a um novo estilo de vida: o seu!
            </p>
            <p>
              Este é o Station Residence, o novo empreendimento da MBigucci que
              está pronto na Rua Conduru, 59, no Jabaquara/SP, a apenas 300m da
              estação Conceição linha azul do metrô. A melhor localização em um
              dos principais pontos de São Paulo, cercado de praças, centros
              esportivos e culturais para a qualidade de vida que você busca.
            </p>
          </div>
          <div className="description_image">
            <img
              className="toten-metro"
              src="https://www.mbigucci.com.br/wp-content/uploads/2024/04/Copia-de-Estacao-Conceicao-Metro.jpg"
              alt="Totem da estação de metrô Conceição"
            />
          </div>
        </section>
        <section className="galery">
          <h2>GALERIA</h2>
          <hr />
          <div className="carousel">
            <div className="carousel_item-show">
              <img
                src="https://www.mbigucci.com.br/wp-content/uploads/elementor/thumbs/Copia-de-WhatsApp-Image-2021-04-06-at-14.59.08-14-1-qn38a5vhqla47k1owl2xg54jvxh14v77obqqvcx38w.jpeg"
                alt="Espaço gourmet"
              />
              <p>ESPAÇO GOURMET</p>
            </div>
            <div className="carousel_item-show">
              <img
                src="https://www.mbigucci.com.br/wp-content/uploads/elementor/thumbs/Copia-de-WhatsApp-Image-2021-04-06-at-14.59.33-qn38av94v48ux10tse1utgpzxbzxwozyrtcuttvgkw.jpeg"
                alt="Academia"
              />
              <p>ACADEMIA</p>
            </div>
            <div className="carousel_item-show">
              <img
                src="https://www.mbigucci.com.br/wp-content/uploads/elementor/thumbs/Copia-de-WhatsApp-Image-2021-04-06-at-14.59.08-8-qn389pw8ieo8q6owhw69rr5psdnsi0fry4nhpnks6o.jpeg"
                alt="Espaço gourmet"
              />
              <p>ESPAÇO GOURMET</p>
            </div>
          </div>
        </section>
        <section className="floor-plans">
          <img
            src="https://www.mbigucci.com.br/wp-content/uploads/2024/04/Copia-de-Planta-final-1.jpg"
            alt="Imagem de planta baixa gerada por software de modelagem 2d"
            className="carousel"
          />
          <div className="details">
            <h2>PLANTAS</h2>
            <hr />
            <p>PLANTAS INTELILGENTES QUE OFERECEM O MÁXIMO APROVEITAMENTO</p>
          </div>
        </section>
        <section className="talk-to-brokers">
          <form>
            <span className="title">GOSTOU DESTE IMÓVEL?</span>
            <fieldset>
              <legend>Converse com um dos nossos corretores</legend>
            </fieldset>
            <p>
              <input type="text" name="name" placeholder="Nome" />
            </p>
            <p>
              <input type="text" name="email" placeholder="E-mail" />
            </p>
            <p>
              <input
                type="text"
                name="phone"
                placeholder="Seu celular com DDD"
              />
            </p>
            <p>
              <button type="submit">Enviar</button>
            </p>
          </form>
        </section>

        <section className="documents">
          <h2>DOCUMENTOS</h2>
          <hr />
          <p>ALGUNS DOCUMENTOS EM PDF QUE PODEM SER ÚTEIS</p>
          <button type="button">APRESENTAÇÃO DO EMPREENDIMENTO</button>
        </section>
      </main>

      <Footer />
    </Container>
  );
}
