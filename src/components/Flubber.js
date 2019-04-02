import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useTrail, animated } from 'react-spring';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function Goo() {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }));
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>

      <Helmet>
        <style>
          {`
            .hooks-main > svg {
              display: none;
            }

            .hooks-main > div {
              position: absolute;
              will-change: transform;
              border-radius: 50%;
              background: lightcoral;
              box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
              opacity: 0.6;
            }

            .hooks-main > div:nth-child(1) {
              width: 120px;
              height: 120px;
            }

            .hooks-main > div:nth-child(2) {
              width: 250px;
              height: 250px;
            }

            .hooks-main > div:nth-child(3) {
              width: 150px;
              height: 150px;
            }

            .hooks-main > div::after {
              content: '';
              position: absolute;
              top: 20px;
              left: 20px;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.8);
            }

            .hooks-main > div:nth-child(2)::after {
              top: 70px;
              left: 70px;
              width: 70px;
              height: 70px;
            }

            .hooks-main > div:nth-child(3)::after {
              top: 50px;
              left: 50px;
              width: 50px;
              height: 50px;
            }

            .hooks-main {
              position: absolute;
              width: 100%;
              height: 100%;
              top: -20px;
              filter: url('#goo');
              overflow: hidden;
            }
          `}
        </style>
      </Helmet>
    </>
  );
}

Goo.propTypes = {
  xy: PropTypes.objectOf(PropTypes.any)
};

Goo.defaultProps = {
  xy: {}
};

export default Goo;
