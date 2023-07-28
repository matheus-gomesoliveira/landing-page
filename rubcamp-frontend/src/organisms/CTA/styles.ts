import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #38077C;
    clip-path: polygon(0% 0%, 100% 8%, 100% 100%, 0% 100%);

`

export const Content = styled.div`
    max-width: 1240px;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 200px 0 ;
    display: flex;
    flex-direction: row;
    text-align: center;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Button = styled.div`
  width: 410px;
  height: 105px;
  background-color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: #38077c;
  transition: all 0.2s ease-out;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    align-self: center;
    font-size: 18px;
    width: 230px;
    height: 60px;
    z-index: 1;
  }

  &:hover {
    border: 3px solid #ffffff;
    background-color: #38077c;
    color: #ffffff;
  }
`

export const Text = styled.span`
    font-size: 28px;
    font-weight: bolder;
    color: #FFFFFF;
    text-align: left;
    padding-left: 40px;
    @media (max-width: 768px) {
        padding: 0 0 20px 0;
        text-align: center;
    }
`

export const TextBox = styled.div`
    width: 53%;
    display: flex;
    justify-content:left;
    @media (max-width: 768px) {
        width: 90%;
    }
`


