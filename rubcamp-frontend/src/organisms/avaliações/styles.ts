import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width:100%;
    max-width: 1500px;
    padding: 100px 0 200px;
`
export const Title = styled.span`
    color: #6B7AE5;
    font-size: 85px;
    font-weight: bolder;
    @media (max-width:856px) {
        font-size: 70px;
    }
    @media (max-width:676px) {
        font-size: 40px;
    }
`
export const TextBox = styled.div`
    text-align: left;
    max-width:1240px;
    padding-bottom: 3%;
    @media (max-width:768px) {
        margin-left: 40px;
    }
`