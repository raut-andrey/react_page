import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import Spiner from './components/Spiner';
import Header from './components/header/Header';
import Footer from './components/Footer';

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Spiner />

          <ToastContainer autoClose={3000} draggable />

          <Header />

          <StyledContainer className="responsive-container">
            <Routes />
          </StyledContainer>

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const StyledContainer = styled.main`
  grid-area: main;

  && {
    padding-top: 20px;
  }
`;

export default App;
