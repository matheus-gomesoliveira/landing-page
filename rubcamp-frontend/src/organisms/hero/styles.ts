import styled from "styled-components";

export const StyledWhiteTitle =  styled.div`
    font-weight: bold;
    font-size: 85px;
    color: #FFFFFF;
    text-shadow: 5px 5px #000000;
    @media (max-width:880px) {
        font-size: 34px;
    }
`

export const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-top: 15%;
    padding-bottom: 15%;
    background-color: #38077C;
`

export const Content = styled.div`
    display: flex ;
    box-sizing: border-box;
    align-items: self-start;
    justify-content: space-between;
    width: 1240px;
    div{
        padding-top: 25px ;
    }
    img{
        max-width: 100%;
        height:auto
    }
    @media (max-width:880px) {
        padding-top: 12%;
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

        &:hover{
            border: 3px solid #FFFFFF;
            background-color: #38077C;
            color: #FFFFFF;
        }
        @media (max-width:880px) {
            display: none;
    }
  }
`

export const Description = styled.span`
    font-size: 32px;
    letter-spacing: 1px;
    width: 30vw;
    height: auto;
    margin-top: 20px;
    line-height: 45px;
    font-weight: lighter;
    text-align: left;
    color: #FFFFFF;
    @media (max-width:880px) {
        font-size: 20px;
        letter-spacing: normal;
        line-height: normal;
        width: 50%;
        height: auto;
    }
`
export const AuxTitle = styled.span` 
    letter-spacing: 1px;
    font-weight: 550;
    font-size: 28px;
    color: #FFFFFF;
    @media (max-width:880px) {
        font-size: 12px;
        letter-spacing: normal;
    }
`