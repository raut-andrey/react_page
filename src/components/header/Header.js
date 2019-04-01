import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../images/logo.svg';

class Header extends PureComponent {
  render() {
    return (
      <StyledContainer className="page-header">
        <div className="page-header__wrapper responsive-container">
          <nav className="page-header__links-container">
            <Link to="/" className="page-header__link">
              <img src={logoImage} alt="" className="page-header__logo-image" />
            </Link>
          </nav>
        </div>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.header`
  grid-area: header;

  .page-header__wrapper {
    height: 100%;
  }

  .page-header__links-container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .page-header__link {
    margin-right: 15px;

    :last-child {
      margin-right: unset;
    }
  }

  .page-header__logo-image {
    height: 45px;
    vertical-align: middle;
  }
`;

export default Header;
