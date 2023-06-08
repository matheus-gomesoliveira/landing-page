import { Container } from "./styles"
import * as S from "../header/styles"
import Menu from "../../molecules/Menu/menu"
import Button from "../../molecules/Botão/botao"
import  React from 'react';
import LogoBranca from "../../atoms/Logo_Branca"
import BotaoFechar from "../../atoms/Botao_Fechar";

interface Props{
    setMenuIsVisible:React.Dispatch<React.SetStateAction<boolean>>
    closeMenu: () => void
}

const MenuMobile = ({ setMenuIsVisible, closeMenu }: Props) => {    
    return(
    <Container>
        <S.NavMenu>
            <S.MenuBar>
                <LogoBranca />  
                <BotaoFechar closeMenu={closeMenu}/>
            </S.MenuBar>
            <Menu />
            <Button/>
        </S.NavMenu>
    </Container>
    )
}

export default MenuMobile