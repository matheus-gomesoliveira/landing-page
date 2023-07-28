import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const arrowStyles = {
  };


export const Container  = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;
    padding: 90px 0;
    width: 100%;
`

export const Titulo = styled.span`
    font-size: 85px;
    font-weight: bold;
    color: #6B7AE5;
    text-align: justify;
    @media (max-width: 768px) {
        font-size: 34px;
    }
`
export const Quadro = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
    }
`
export const StyledCarousel = styled(Carousel)`
  z-index: -1;

  div > img {
    height: 280px;
    width: 280px;
  }

  .carousel .control-prev {
    left: -40px; 
  }

  .carousel .control-next {
    right: -40px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;







