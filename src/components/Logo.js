import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import logoImage from '../images/logo.svg';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Logo(inputProps) {
  // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 0.1,
      tension: 400,
      friction: 40
    }
  }));

  const {
    className,
    onClick
  } = inputProps;

  return (
    <StyledCard
      className={`card ${className}`}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      onClick={onClick}
    />
  );
}

Logo.propTypes = {
  xys: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
  className: PropTypes.string
};

Logo.defaultProps = {
  xys: {},
  onClick: () => null,
  className: ''
};

const StyledCard = styled(animated.div)`
  &.card {
    width: 30ch;
    height: 30ch;
    background-image: url(${logoImage});
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 auto;
  }

  &.card:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

export default Logo;
