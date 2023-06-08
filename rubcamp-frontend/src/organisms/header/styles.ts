import styled from "styled-components";

export const Box = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;

    @media (max-width: 1024px) {
        height: 80px;
    }
`
export const Nav =  styled.nav`
    max-width: 1240px;
    width: 100%;
    margin: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button{@media (max-width:1024px) {
        display: none ;
    }
}
`

export const NavMenu = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 50px;
    ul{
        position: fixed;
        top:0;
        margin-top: 95px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-between;
        text-align: center;
    }
`
export const MenuBar = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #38077C;
    img{
        padding: 0 15px;
    }
`