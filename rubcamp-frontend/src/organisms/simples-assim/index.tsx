import * as S from "./styles"
import QuadroRub from "../../assets/janleas_box.svg"
import FillSimplesAssim from "../../assets/simples-assim.svg"

const SimplesAssim = () =>{
    return(
    <S.Container>
        <S.Titulo>SIMPLES ASSIM</S.Titulo>
        <S.Quadro><img src={QuadroRub} alt="" /></S.Quadro>
    </S.Container>
    )
}

export default SimplesAssim