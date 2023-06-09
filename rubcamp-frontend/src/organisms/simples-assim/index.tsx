import * as S from "./styles"
import { arrowStyles } from "./styles";
import QuadroRub from "../../assets/janleas_box.svg"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Janela1 from "../../assets/janela1.svg"
import Janela2 from "../../assets/janela2.svg"
import Janela3 from "../../assets/janela3.svg"
import Janela4 from "../../assets/janela4.svg"


const SimplesAssim = () => {

    return (
      <S.Container>
        <S.Titulo>SIMPLES ASSIM</S.Titulo>
          <S.Quadro>
            <img src={QuadroRub} alt="" />
          </S.Quadro>
          <S.StyledCarousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows
            swipeable
            infiniteLoop
            autoPlay
            interval={5000}
            stopOnHover
            emulateTouch
            dynamicHeight={false}
            useKeyboardArrows
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