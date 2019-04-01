import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledContainer>
        <h1 className="page-title">Home</h1>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
`;

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
