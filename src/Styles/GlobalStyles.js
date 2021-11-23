import { createGlobalStyle } from "styled-components";
import './styles.css'

export default createGlobalStyle`
  * {
    //margin: 0;
    //padding: 0;
    box-sizing: border-box;
  }
  body {
      background-color: #111;
      color: #fff;
      margin: 0;
      font-family: 'Roboto', sans-serif;
  }
  
  `;