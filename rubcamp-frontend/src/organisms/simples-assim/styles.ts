import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    width: 60,
    height: 60,
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: 'red',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateY(-50%)',
  };


export const Container  = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;
    padding-top: 65px;
    height: 980px;
    width: 100%;
    @media (max-width: 768px) {
        padding-top:10vh ;
    }
`

export const Titulo = styled.span`
    font-size: 85px;
    font-weight: bold;
    color: #6B7AE5;
    text-shadow: 5px 5px #000000;
    text-align: justify;
    @media (max-width: 768px) {
        font-size: 34px;
        text-shadow: 3px 3px #000000;
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
    div>img{
        height: 280px;
        width: auto;
    }
    @media (min-width: 769px) {
        display: none;
    }
`
