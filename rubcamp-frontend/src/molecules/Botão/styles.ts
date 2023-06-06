import styled from "styled-components";

export const GradientButton = styled.button`
    width: 240px;
    height: 60px;
    background-color:#38077C;
    border-radius: 20px ;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    transition: all 0.2s ease-out;
    border: none;

    &:hover{
        border: 3px solid #38077C;
        background-color: #FFFFFF;
        color: #38077C;
}
`