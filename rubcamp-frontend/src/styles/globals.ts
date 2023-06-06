import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

html, body, #root{
    height: 100%;
}

button{
    background-color: none;
    border: none;
    outline: none;
}

a{
    text-decoration: none;
    outline: none;
}
`


export default GlobalStyle