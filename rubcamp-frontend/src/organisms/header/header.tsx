import { useState, useEffect } from "react"
import * as S from "./styles"
import Logo from "../../atoms/Logo"
import Menu from "../../molecules/Menu/menu"
import Button from "../../molecules/Botão/botao"
import Sanduiche from "../../atoms/Sanduiche"

const Header = ({ setMenuIsVisible }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
        useEffect(() => {
            window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const openMenu = () => {
      setMenuIsVisible(true);
    };
  
    return (
      <S.Box>
        <S.Nav>
          <Logo />
          <Menu />
          <Button />
          {screenWidth <= 1024 && (
            <Sanduiche openMenu={openMenu} />
          )}
        </S.Nav>
      </S.Box>
    );
  };

export default Header

