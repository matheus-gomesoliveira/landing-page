import { useState } from 'react'
import Header from '../organisms/header/header'
import * as S from "./styles"
import MenuMobile from "../organisms/menu_mobile/"
import SimplesAssim from '../organisms/simples-assim';

function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const closeMenu = () => {
    setMenuIsVisible(false);
  };

  return (
    <>
      {menuIsVisible && (
        <MenuMobile setMenuIsVisible={setMenuIsVisible} closeMenu={closeMenu} />
      )}

      <S.Container>
        <Header setMenuIsVisible = {setMenuIsVisible}/>
        <SimplesAssim />
      </S.Container>
    </>
  );
}
export default Home
