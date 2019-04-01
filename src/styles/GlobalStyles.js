import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  html, body, #root {
    height: 1px;
    min-height: 100%;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr 30px;
    grid-template-areas: 'header' 'main' 'footer';
  }

  a {
    text-decoration: none;
    color: unset;
  }

  .page-title {
    text-align: center;
  }

  .responsive-container {
    width: calc(100% - 30px);
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;
