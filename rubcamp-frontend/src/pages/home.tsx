import { useState, useEffect } from 'react'
import Header from '../organisms/header/header'
import * as S from "./styles"
import MenuMobile from "../organisms/menu_mobile/"
import SimplesAssim from '../organisms/simples-assim';
import HeroSection from '../organisms/hero/hero';
import Vantagens from '../organisms/vantagens';
import Avaliacoes from '../organisms/avaliações';
import CTA from '../organisms/CTA';
import Footer from '../organisms/footer';
import FooterMobile from '../organisms/footer-mobile';

function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuIsVisible(false);
  };

  return (
    <>
      {menuIsVisible && (
        <MenuMobile setMenuIsVisible={setMenuIsVisible} closeMenu={closeMenu} />
      )}

      <S.Container>
        <Header setMenuIsVisible={setMenuIsVisible} />
        <HeroSection />
        <SimplesAssim />
        <Vantagens />
        <Avaliacoes />
        <CTA />
        {window.innerWidth > 830 ?(
        <Footer />
        ) :
        (
        <FooterMobile />
        )}
      </S.Container>
    </>
  );
}
export default Home
