import * as S from "./styles";
import Logo from "../../assets/logo_rub (2).png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Wrap>
          <S.box1>
            <S.Text>Um aplicativo:</S.Text>
            <img
              src={Logo}
              style={{
                paddingTop: 17,
                paddingBottom: 13,
              }}
            />

            <S.Text>Acompanhe nossas redes</S.Text>
            <S.images>
              <a>
                <img src={Instagram} style={{ cursor: "pointer" }} />
              </a>
              <a>
                <img
                  src={Linkedin}
                  style={{ paddingLeft: 13, cursor: "pointer" }}
                />
              </a>
            </S.images>
          </S.box1>

          <S.box2>
            <S.Text>Quem Somos</S.Text>
            <a>Nossa missão</a>
            <a>Nossa visão</a>
            <a>Nossos valores</a>
          </S.box2>

          <S.box2>
            <S.Text>Links rápidos</S.Text>
            <a>Serviços</a>
            <a>Rub Labs</a>
            <a>Trabalhe conosco</a>
          </S.box2>

          <S.box2>
            <S.Text>Contate-nos</S.Text>
            <S.Text17>Fone: (18) 3222-6805</S.Text17>
            <S.Text17>E-mail: contato@rubcube.com</S.Text17>
          </S.box2>
        </S.Wrap>
        <S.Name>©Rubcube 2023</S.Name>
      </S.Content>
    </S.Container>
  );
};
export default Footer;
