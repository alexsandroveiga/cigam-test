import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #222;
    color: #fff;
    font: 400 1rem 'Inter', sans-serif;
  }
  input, button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    outline: 0;
    border-radius: 0;
    border: 0;
  }
`
