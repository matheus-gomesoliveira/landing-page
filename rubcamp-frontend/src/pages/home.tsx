import { useState, useEffect } from 'react'
import Header from '../organisms/header/header'
import * as S from "./styles"
import MenuMobile from "../organisms/menu_mobile/"
import SimplesAssim from '../organisms/simples-assim';
import HeroSection from '../organisms/hero/hero';

function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
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
      </S.Container>
    </>
  );
}
export default Home
