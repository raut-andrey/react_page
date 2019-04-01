import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Spiner extends PureComponent {
  render() {
    if (!this.props.show) { return null; }

    return (
      <StyledContainer src={`${process.env.PUBLIC_URL}/spiner.svg`} alt="spiner" />
    );
  }
}

const StyledContainer = styled.img`
  position: fixed;
  width: 100px;
  height: 100px;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  z-index: 1000;
`;

const connectFunction = connect(
  (store) => ({
    show: store.globalValues.showSpiner
  }), {}
);

Spiner.propTypes = {
  show: PropTypes.bool
};

Spiner.defaultProps = {
  show: false
};

export default connectFunction(Spiner);
