import styled from "styled-components"

export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    width: 650px;
`

export const ItemList = styled.li`
    display: inline-block;
    font-weight: bold;
    font-size: 24px;


    &:hover{
        a{
            box-shadow: 0 5px  #38077C;
        }
    }

    a{
        color: #38077C;
        transition: all 0.25s ease-out;
    }
    
`
