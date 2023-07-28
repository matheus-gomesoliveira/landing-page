import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1280px;
    background-color: #38077C;
    clip-path: polygon(0% 0%, 100% 8%, 100% 92%, 0% 100%);

`

export const Content = styled.div`
    max-width: 1240px;
    justify-content: space-around;
    align-items: center;
    height: auto;
    padding: 200px 0 ;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const StyledWhiteTitle =  styled.div`
    font-weight: bold;
    font-size: 85px;
    color: #FFFFFF;
    padding: 10px;
    @media (max-width:856px) {
        font-size: 70px;
    }
    @media (max-width:676px) {
        font-size: 40px;
    }
    @media (max-width:400px) {
        font-size: 32px;
    }
`

export const Description = styled.span`
    font-size: 32px;
    letter-spacing: 1px;
    height: auto;
    margin-top: 1%;
    line-height: 45px;
    font-weight: lighter;
    text-align: left;
    padding-left: 10px;
    color: #FFFFFF;
    @media (max-width:856px) {
        font-size: 20px;
        line-height: normal;
    }
    @media (max-width:676px) {
        font-size: 18px;
        line-height: normal;
    }
`

export const Box1 = styled.div`
    align-self:flex-start ;
    display: flex;
    height: auto;
    width: 80%;
    margin: 20px;
    flex-direction: column;
    text-align: left;
    box-shadow: -10px 10px #6B7AE5 ;
`

export const Box2 = styled.div`
    align-self: flex-end;
    display: flex;
    height: auto;
    width: 80%;
    margin: 20px;
    padding-right: 10px;
    flex-direction: column;
    text-align: right;;
    box-shadow: 10px 10px #6B7AE5 ;
    span{
        text-align: right;
    }
`