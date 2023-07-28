import React, { useState } from "react";
import * as S from "./styles";
import Logo from "../../assets/logo_rub (2).png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

const FooterMobile = () => {
  // State to manage the visibility of the dropdown links
  const [quemSomosVisible, setQuemSomosVisible] = useState(false);
  const [contateNosVisible, setContateNosVisible] = useState(false);
  const [linksRapidosVisible, setLinksRapidosVisible] = useState(false);

  // Toggle functions for each dropdown
  const toggleQuemSomos = () => setQuemSomosVisible(!quemSomosVisible);
  const toggleContateNos = () => setContateNosVisible(!contateNosVisible);
  const toggleLinksRapidos = () => setLinksRapidosVisible(!linksRapidosVisible);

  return (
    <S.Container>
      <S.Content>
        <S.box1>
          <S.Text>Um aplicativo:</S.Text>
          <img
            src={Logo}
            style={{ paddingTop: 17, paddingBottom: 13 }}
            alt="Logo"
          />

          <S.Text>Acompanhe nossas redes</S.Text>
          <S.images>
            <a>
              <img
                src={Instagram}
                style={{ cursor: "pointer", paddingBottom: 13 }}
                alt="Instagram"
              />
            </a>
            <a>
              <img
                src={Linkedin}
                style={{ paddingLeft: 13, paddingBottom: 13,cursor: "pointer" }}
                alt="Linkedin"
              />
            </a>
          </S.images>
        </S.box1>

        <S.box2>
          {/* Dropdown for "Quem Somos" */}
          <S.Text15 onClick={toggleQuemSomos}>Quem Somos</S.Text15>
          {quemSomosVisible && (
            <>
              <a>Nossa missão</a>
              <a>Nossa visão</a>
              <a>Nossos valores</a>
            </>
          )}
        </S.box2>

        <S.box2>
          {/* Dropdown for "Links rápidos" */}
          <S.Text15 onClick={toggleLinksRapidos}>Links rápidos</S.Text15>
          {linksRapidosVisible && (
            <>
              <a>Serviços</a>
              <a>Rub Labs</a>
              <a>Trabalhe conosco</a>
            </>
          )}
        </S.box2>

        <S.box2>
          {/* Dropdown for "Contate-nos" */}
          <S.Text15 onClick={toggleContateNos}>Contate-nos</S.Text15>
          {contateNosVisible && (
            <>
              <S.Text17>Fone: (18) 3222-6805</S.Text17>
              <S.Text17>E-mail: contato@rubcube.com</S.Text17>
            </>
          )}
        </S.box2>
        <S.Name>©Rubcube 2023</S.Name>
      </S.Content>
    </S.Container>
  );
};

export default FooterMobile;
