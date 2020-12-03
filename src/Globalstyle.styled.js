import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
  body {
    background-color: #F7F9F9;
    color: #303030;
    font-size: 62.5%;
    width: 100%;
    height: 100vh;
  }
`

export default GlobalStyle
