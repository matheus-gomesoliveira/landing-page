import * as S from "./styles"
import { arrowStyles } from "./styles";
import QuadroRub from "../../assets/janleas_box.svg"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Janela1 from "../../assets/janela1.svg"
import Janela2 from "../../assets/janela2.svg"
import Janela3 from "../../assets/janela3.svg"
import Janela4 from "../../assets/janela4.svg"


const SimplesAssim = () => {

    return (
      <S.Container id="simples-assim">
        <S.Titulo>SIMPLES ASSIM</S.Titulo>
          <S.Quadro>
            <img src={QuadroRub} alt="" />
          </S.Quadro>
          <S.StyledCarousel
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            showArrows={false}
            swipeable={true}
            infiniteLoop
            autoPlay
            interval={2000}
            stopOnHover
            emulateTouch
            dynamicHeight={true}
            selectedItem={0}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} style={arrowStyles as React.CSSProperties}>
                  <i className="arrow left" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} style={arrowStyles as React.CSSProperties}>
                  <i className="arrow right" />
                </button>
              )
            }
          >
            <div>
              <img src={Janela1} alt="Janela 1" />
            </div>
            <div>
              <img src={Janela2} alt="Janela 2" />
            </div>
            <div>
              <img src={Janela3} alt="Janela 3" />
            </div>
            <div>
              <img src={Janela4} alt="Janela 4" />
            </div>
          </S.StyledCarousel>
      </S.Container>
    );
  };
  
  export default SimplesAssim;