import styled from "styled-components";

export const StyledWhiteTitle =  styled.div`
    font-weight: bold;
    font-size: 85px;
    color: #FFFFFF;
    @media (max-width: 768px) {
        font-size: 30px;
        text-align: center;
    }
`

export const Container = styled.section`
    display: flex;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    height: auto;
    padding-top: 15%;
    padding-bottom: 18%;
    background-color: #38077C;
    clip-path: polygon(0 0%, 100% 0, 100% 92%, 0% 100%);
    @media (max-width: 768px) {
        padding-top: 150px;
    }
`

export const Content = styled.div`
    display: flex ;
    justify-content: space-between;
    width: 1240px;
    @media (max-width: 590px) {
        justify-content: space-around;
    }
    img{
        object-fit: contain;
        width: auto;
        height: 100%;
        @media (max-width: 590px) {
            position: absolute;
            align-self: center;
            height: auto;
            width: 30%;
            right: 5vw;
            top: 220px;
            opacity: 50%;
        }
        @media (max-width: 400px) {
            opacity: initial;
        }
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    button{
        margin-top: 40px;
        width: 410px;
        height: 105px;
        background-color:#FFFFFF;
        border-radius: 20px ;
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
        color: #38077C;
        transition: all 0.2s ease-out;
        border: none;
        @media (max-width: 768px) {
            align-self: center;
            font-size: 18px;
            width: 300px;
            height: 75px;
            z-index: 1;
        }

        &:hover{
            border: 3px solid #FFFFFF;
            background-color: #38077C;
            color: #FFFFFF;
        }
  }
`

export const Description = styled.span`
    font-size: 32px;
    letter-spacing: 1px;
    width: 35vw;
    height: auto;
    margin-top: 20px;
    line-height: 45px;
    font-weight: lighter;
    text-align: left;
    color: #FFFFFF;
    @media (max-width: 768px) {
        margin: 20% 0;
        justify-content: center;
        font-size: 20px;
        width: 50vw;
        letter-spacing: none;
        line-height: normal;
    }

`
export const AuxTitle = styled.span` 
    letter-spacing: 1px;
    font-weight: 550;
    font-size: 28px;
    color: #FFFFFF;
    @media (max-width: 768px) {
        font-size: 12px;
        text-align: center;
    }

`