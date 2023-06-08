import styled from "styled-components";

export const Container  = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;
    padding: 0;
    height: 1080px;
    width: 100%;
    margin-top:100PX !important;
    background-size: cover;

    @media (max-width: 1024px) {
        margin-top: 80px !important;
    }
`

export const Titulo = styled.span`
    font-size: 85px;
    font-weight: bold;
    color: #6B7AE5;
    text-shadow: 5px 5px #000000;
    text-align: justify;
`
export const Quadro = styled.div`
    display: flex;
    justify-content: center;
`