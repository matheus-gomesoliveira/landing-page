import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #6B7AE5;
`

export const Content = styled.div`
    max-width: 1240px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 40px 0 60px ;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 20px;
`

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`

export const Text = styled.span`
    font-size: 20px;
    font-weight: bolder;
    color: #FFFFFF;
    padding-bottom: 13px;
`

export const Text17 = styled.span`
    font-size: 17px;
    color: #FFFFFF;
`
export const Text15 = styled.span`
    font-size: 15px;
    font-weight: bolder;
    color: #FFFFFF;
    cursor: pointer;
`

export const box1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start ;
`
export const box2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start ;

    &:hover{
        a{
            text-decoration:underline;
            cursor: pointer;
        }
    }

    a{
        color: #FFFFFF;
        transition: all 0.25s ease-out;
        font-size: 17px;
    }
`

export const images = styled.div`
    flex-direction: row;
`
export const Name = styled.span`
  font-size: 12px;
  font-weight: bolder;
  color: #ffffff;
  align-self: center;
  padding: 10px 0;
`

