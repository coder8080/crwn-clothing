import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 80px;

    @media screen and (max-width: 800px) {
       padding: 10px; 
    }
  }
  
  a {
    color: black;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  `

export default GlobalStyle
