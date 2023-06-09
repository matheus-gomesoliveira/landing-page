import * as S from "./styles"
import Celular from "../../assets/iPhone 12 Pro (1).svg"

const HeroSection = () =>{
    return (
    <S.Container>
        <S.Content>
            <S.Text>
                <S.AuxTitle>UM APLICATIVO QUE UNE FUNCIONÁRIOS</S.AuxTitle>
                <S.StyledWhiteTitle>O BANCO DA RUB</S.StyledWhiteTitle>
                <S.Description>Realize tranferências, compras e tenha acesso à benefícios exclusivos para funcionários Rub.</S.Description>
                <button>BAIXE AGORA</button>
            </S.Text>
            <img src={Celular} width={260} height={540}/>
        </S.Content>
    </S.Container>
    )
}

export default HeroSection