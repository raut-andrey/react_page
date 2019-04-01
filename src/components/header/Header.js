import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Header extends PureComponent {
  render() {
    return (
      <StyledContainer />
    );
  }
}

const StyledContainer = styled.header`
  grid-area: header;
`;

export default Header;
