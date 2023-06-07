import * as S from "./styles"
import Logo from "../../molecules/Logo"
import Menu from "../../molecules/Menu/menu"
import Button from "../../molecules/Botão/botao"

const Header = () => {
    return (
    <S.Box>
        <S.Nav>
            <Logo></Logo>
            <Menu></Menu>
            <Button></Button>
        </S.Nav>
    </S.Box>
)
}

export default Header