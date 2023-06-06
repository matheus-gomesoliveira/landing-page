import Header from "../../organisms/header/header"
import FirstSection from "../../organisms/primeira_seção/first_section"
import * as S from "./styles"

type FrontentProps = {
    children: React.ReactNode
}

const Frontend = ({ children }: FrontentProps) =>{
        return (
        <S.ContentContainer>
            <Header></Header>
        </S.ContentContainer>)
}

export default Frontend