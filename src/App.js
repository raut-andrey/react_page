import React, { PureComponent } from 'react';
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

          <Routes />

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
