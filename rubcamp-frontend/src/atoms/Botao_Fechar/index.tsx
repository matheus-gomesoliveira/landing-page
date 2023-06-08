import Fechar from "../../assets/Botao_Fechar.svg"
import * as S from "./styles"

interface Props{
    closeMenu:()=>void
}

const BotaoFechar = ({ closeMenu }: Props)=>{    
      return (
        <S.FecharHover>
            <img src={Fechar} alt="Fechar" onClick={closeMenu} />
        </S.FecharHover>
      );
    };

export default BotaoFechar