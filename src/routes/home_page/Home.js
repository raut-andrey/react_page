import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../../components/Logo';
// import Flubber from '../../components/Flubber';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledContainer>
        <Logo />

        {/* <Flubber /> */}
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
