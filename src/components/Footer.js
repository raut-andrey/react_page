import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Footer extends PureComponent {
  render() {
    return (
      <StyledContainer className="page-footer">
        <span className="page-footer__title">
          My react site with some features.
        </span>

        <nav className="page-footer__links-container">
          {
            links.map(link => (
              <a key={link.url} href={link.url} className="page-footer__link">
                <i className={link.iconClass} />
              </a>
            ))
          }
        </nav>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;

  .page-footer__title {
    font-size: 13px;
    margin-right: 10px;
  }

  .page-footer__links-container {

  }

  .page-footer__link {
    font-size: 18px;
    margin-right: 7px;

    :last-child {
      margin-right: unset;
    }

    i {
    }
  }
`;

const links = [
  {
    iconClass: 'fab fa-facebook-f',
    url: 'https://www.facebook.com/raut.andrey'
  },
  {
    iconClass: 'fab fa-github',
    url: 'https://github.com/raut-andrey'
  },
  {
    iconClass: 'fab fa-vk',
    url: 'https://vk.com/raut_andrey'
  },
  {
    iconClass: 'fab fa-instagram',
    url: 'https://www.instagram.com/raut_andrey'
  }
];

export default Footer;
