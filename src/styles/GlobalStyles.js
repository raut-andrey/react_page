import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  html {
    background: #eee;
  }

  body {
    background: radial-gradient(circle at 40px 40px,#fdf5ed 0%,#ffbb40 67%,#bf8111 95%);
  }

  html, body, #root {
    height: 1px;
    min-height: 100%;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 30px;
    grid-template-areas: 'header' 'main' 'footer';
  }

  a {
    text-decoration: none;
    color: unset;
  }

  .page-title {
    text-align: center;

    font-size: 30px;
    text-transform: uppercase;
    background: linear-gradient(90deg, #0B2349 -30%, #0D61BC 50%, #8AA9D6 110%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #0B2349;
    display: table;
    margin: 0 auto 20px;
  }

  .responsive-container {
    width: calc(100% - 30px);
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;
