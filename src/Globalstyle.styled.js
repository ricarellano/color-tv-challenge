import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
  }
  body {
    background-color: #F1F1F1;
    color: #303030;
    font-size: 62.5%;
    width: 100%;
    height: 100vh;
  }
`

export default GlobalStyle

