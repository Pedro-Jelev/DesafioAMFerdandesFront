import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "../../components/Header";
import { Show } from "../../components/Show";
import { Navigation } from "swiper/modules";
import map from "../../assets/map.png";
import "swiper/css/grid";
import "swiper/css";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container>
      <Header />
      <img
        className="banner"
        src="https://www.mbigucci.com.br/wp-content/uploads/2024/05/banner-site-mbigucci-completa_01.jpg"
        alt=""
      />

      <main>
        <section className="box-filter">
          <h2>Encontre o MBigucci perfeito para você</h2>
          <div className="filter-row">
            <div className="box-wrapper">
              <select name="oftipo" id="oftipo">
                <option value="0" selected>
                  Tipos de empreendimento
                </option>
                <option value="170">Comercial</option>
                <option value="188">Industrial</option>
                <option value="82">Residencial</option>
              </select>
            </div>

            <div className="box-wrapper">
              <select name="ofdormitorios" id="ofdormitorios">
                <option value="0" selected>
                  Dormitórios
                </option>
                <option value="134">1</option>
                <option value="78">1 a 2</option>
                <option value="137">2</option>
                <option value="122">2 a 3</option>
                <option value="168">3</option>
                <option value="169">3 a 4</option>
              </select>
            </div>

            <div className="box-wrapper">
              <select name="ofdormitorios" id="ofdormitorios">
                <option value="0" selected>
                  Cidades
                </option>
                <option value="175">Guarulhos</option>
                <option value="174">&nbsp;&nbsp;&nbsp;Jardim Diogo</option>
                <option value="128">Santo André</option>
                <option value="136">&nbsp;&nbsp;&nbsp;Campestre</option>
                <option value="183">&nbsp;&nbsp;&nbsp;Parque Jaçatuba</option>
                <option value="129">&nbsp;&nbsp;&nbsp;Santa Terezinha</option>
                <option value="124">São Bernardo do Campo</option>
                <option value="127">&nbsp;&nbsp;&nbsp;Centro</option>
                <option value="178">&nbsp;&nbsp;&nbsp;Cooperativa</option>
                <option value="4714">
                  &nbsp;&nbsp;&nbsp;Jardim das Américas
                </option>
                <option value="184">&nbsp;&nbsp;&nbsp;Jardim do Mar</option>
                <option value="4685">&nbsp;&nbsp;&nbsp;Nova Petrópolis</option>
                <option value="180">&nbsp;&nbsp;&nbsp;Paulicéia</option>
                <option value="125">&nbsp;&nbsp;&nbsp;Rudge Ramos</option>
                <option value="182">&nbsp;&nbsp;&nbsp;Vila Gonçalves</option>
                <option value="195">São Caetano do Sul</option>
                <option value="76">São Paulo</option>
                <option value="135">&nbsp;&nbsp;&nbsp;Aclimação</option>
                <option value="192">&nbsp;&nbsp;&nbsp;Água Funda</option>
                <option value="77">&nbsp;&nbsp;&nbsp;Ipiranga</option>
                <option value="4704">&nbsp;&nbsp;&nbsp;Itaquera</option>
                <option value="4739">&nbsp;&nbsp;&nbsp;Jabaquara</option>
                <option value="193">&nbsp;&nbsp;&nbsp;JD Santa Cruz</option>
                <option value="4711">&nbsp;&nbsp;&nbsp;Morumbi</option>
                <option value="130">&nbsp;&nbsp;&nbsp;São Vicente</option>
                <option value="197">&nbsp;&nbsp;&nbsp;Tucuruvi</option>
                <option value="121">&nbsp;&nbsp;&nbsp;Vila Carrão</option>
                <option value="4726">&nbsp;&nbsp;&nbsp;Vila Prudente</option>
                <option value="4736">São Vicente</option>
                <option value="4737">nbsp;&nbsp;&nbsp;Centro</option>
              </select>
            </div>
          </div>

          <div className="filter-row">
            <div className="box-wrapper">
              <select name="offaixa_de_valor" id="offaixa_de_valor">
                <option value="0" selected>
                  Faixas de valores
                </option>
                <option value="191">acima de R$ 750mil</option>
                <option value="189">Até R$ 350mil</option>
                <option value="190">de R$ 350mil até R$ 750mil</option>
              </select>
            </div>
            <div className="box-wrapper">
              <select name="offase_da_obra" id="offase_da_obra">
                <option value="0" selected>
                  Fases da obra
                </option>
                <option value="87">Em construção</option>
                <option value="81">Lançamento</option>
                <option value="196">Portfólio</option>
                <option value="133">Pronto</option>
              </select>
            </div>
            <div className="box-wrapper">
              <button type="submit">Buscar Imóvel</button>
            </div>
          </div>
        </section>

        <section className="map">
          <img
            src={map}
            alt="Imagem via satélilte indicando a localização dos empreendimentos"
          />
        </section>

        <section className="showcase">
          <h3>
            ÚLTIMOS <strong>LANÇAMENTOS</strong>
          </h3>

          <p>
            Conheça nossos empreendimentos mais recentes e descubra
            oportunidades imperdíveis!
          </p>

          <a href="#" target="_blank" className="show-all">
            VER TODOS
          </a>

          <Swiper
            grabCursor={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.40": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@2.30": {
                slidesPerView: 4,
                spaceBetween: 160,
              },
            }}
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Show
                status="new"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2024/05/FACHADA-1-scaled.jpg"
                imageAlt="Imagem do empreendimento"
                location="SÃO CAETANO DO SUL"
                businessName="Infinite São Caetano"
                area="81"
                dorm="3"
                suite="1"
                vacancies="2 a 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="new"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2024/05/FACHADA-1-scaled.jpg"
                imageAlt="Imagem do empreendimento"
                location="GUARULHOS - JARDIM DIOGO"
                businessName="Modena MBigucci"
                area="43 A 44"
                dorm="2"
                suite="0"
                vacancies="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="new"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2024/05/FACHADA-1-scaled.jpg"
                imageAlt="Imagem do empreendimento"
                location="vila carrão"
                businessName="Terrazzo MBigucci"
                area="43 A 44"
                dorm="2"
                suite="0"
                vacancies="1"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="push-to-talk">
          <img
            src="https://www.mbigucci.com.br/wp-content/uploads/2023/09/et_chat.png"
            alt=""
          />

          <p className="emphasis">FALE AGORA COM UM CORRETOR ONLINE</p>
          <p>Fale com os nossos especialistas e tire suas dúvidas</p>

          <a href="#" target="_blank" className="talk-to-human">
            Fale com um especialista &rsaquo;
          </a>
        </section>

        <section className="showcase">
          <h3>
            IMÓVEIS EM <strong>CONSTRUÇÃO</strong>
          </h3>

          <p>
            Seu sonho está mais próximo do que imagina. Conheça nossos
            empreendimentos com obras em andamento.
          </p>

          <a href="#" target="_blank" className="show-all">
            VER TODOS
          </a>

          <Swiper
            grabCursor={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.40": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@2.30": {
                slidesPerView: 4,
                spaceBetween: 160,
              },
            }}
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Show
                status="construction"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Copia-de-MBIGUCCI_SAO-VICENTE_FACHADA_LR1-1903x2048.jpg"
                imageAlt="Imagem do empreendimento"
                location="centro"
                businessName="Easy São Vicente"
                area="38,71 a 53,54"
                dorm="1 a 2"
                suite="0"
                vacancies="0"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="construction"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Copia-de-MBIGUCCI_SAO-VICENTE_FACHADA_LR1-1903x2048.jpg"
                imageAlt="Imagem do empreendimento"
                location="ipiranga"
                businessName="Palatium Ipiranga"
                area="56 a 85"
                dorm="2 a 3"
                suite="1 a 2"
                vacancies="1 a 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="construction"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Copia-de-MBIGUCCI_SAO-VICENTE_FACHADA_LR1-1903x2048.jpg"
                imageAlt="Imagem do empreendimento"
                location="rudge ramos"
                businessName="Exuberance MBigucci"
                area="70"
                dorm="3"
                suite="1"
                vacancies="1 a 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="construction"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Copia-de-MBIGUCCI_SAO-VICENTE_FACHADA_LR1-1903x2048.jpg"
                imageAlt="Imagem do empreendimento"
                location="rudge ramos"
                businessName="Stylo MBigucci"
                area="71 a 82"
                dorm="2 a 3"
                suite="1"
                vacancies="1 a 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="construction"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Copia-de-MBIGUCCI_SAO-VICENTE_FACHADA_LR1-1903x2048.jpg"
                imageAlt="Imagem do empreendimento"
                location="santa terezinha"
                businessName="Beethoven MBigucci"
                area="37 a 50,18"
                dorm="1 ou 2"
                suite="1"
                vacancies="1"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="showcase">
          <h3>
            IMÓVEIS <strong>PRONTOS</strong>
          </h3>

          <p>
            Seu sonho já pode se tornar realizada. Conheça nossos
            empreendimentos disponíveis para moradia, investimento ou negócios.
          </p>

          <a href="#" target="_blank" className="show-all">
            VER TODOS
          </a>

          <Swiper
            grabCursor={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.40": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@2.30": {
                slidesPerView: 4,
                spaceBetween: 160,
              },
            }}
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="jd. santa cruz"
                businessName="Olimpic MBigucci"
                area="46,56 e 65"
                dorm="2 e 3"
                suite="1"
                vacancies="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="jardim do mar"
                businessName="Marco Zero Home"
                area="42 a 50"
                dorm="1"
                suite="0"
                vacancies="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="jardim do mar"
                businessName="Marco Zero Premire"
                area="65 e 83"
                dorm="2 e 3"
                suite="1"
                vacancies="1,2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="jardim do mar"
                businessName="Marco Zero Tower"
                area="65 e 83"
                dorm="0"
                suite="0"
                vacancies="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="jardim do mar"
                businessName="Marco Zero Mix"
                area="36 a 96"
                dorm="0"
                suite="0"
                vacancies="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="parque jaçatuba"
                businessName="Impactus MBigucci"
                area="50 a 61"
                dorm="2 a 3"
                suite="1"
                vacancies="1,2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="vila gonçalves"
                businessName="Essenza MBigucci"
                area="58,24"
                dorm="2"
                suite="1"
                vacancies="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="pauliceia"
                businessName="Mundi MBigucci"
                area="43,77 a 53,54"
                dorm="2 e 3"
                suite="0"
                vacancies="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Show
                status="read"
                imageLink="https://www.mbigucci.com.br/wp-content/uploads/2023/10/07a943f806a494dfcc20b853ee36faa8.jpeg"
                imageAlt="Imagem do empreendimento"
                location="cooperativa"
                businessName="America MBigucci"
                area="43,60 e 44,86"
                dorm="2"
                suite="0"
                vacancies="0 ou 1"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="life-style">
          <h3>Busque por estilo de vida</h3>

          <Swiper
            grabCursor={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.40": {
                slidesPerView: 5,
                spaceBetween: 80,
              },
              "@2.30": {
                slidesPerView: 4,
                spaceBetween: 160,
              },
            }}
            navigation
            modules={[Navigation]}
            className="life-style_mySwiper"
          >
            <SwiperSlide>
              <div className="life-style_show">
                <img
                  src="https://www.mbigucci.com.br/wp-content/uploads/2023/09/Rectangle-353.png"
                  alt="Mulher segurando cachorro enquanto ele lambe seu rosto"
                />
                <p>Petliver</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="life-style_show">
                <img
                  src="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Rectangle-432-2.png"
                  alt="Homem adulto jovem carregando uma mochila e vestido casualmente"
                />
                <p>Morando sozinho</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="life-style_show">
                <img
                  src="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Rectangle-355.png"
                  alt="Casal sentados à mesa, bebendo champanhe e com pratos de sopa"
                />
                <p>Casal</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="life-style_show">
                <img
                  src="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Rectangle-432-1.png"
                  alt="Casa de homem e mulher com um bebê, sentados à mesa com papeis"
                />
                <p>Família com filhos</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="life-style_show">
                <img
                  src="https://www.mbigucci.com.br/wp-content/uploads/2023/11/estilo-de-vida-investidor.jpg"
                  alt="Dois homens de meia idade que conversam e estão vestidos formalmente. Eles seguram um tablet."
                />
                <p>Investidor</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="life-style_show">
                <img
                  src="https://www.mbigucci.com.br/wp-content/uploads/2023/10/Rectangle-432.png"
                  alt="Casal de idosos praticando atividade física (corrida)"
                />
                <p>Melhor idade</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>

      <Footer />
    </Container>
  );
}
