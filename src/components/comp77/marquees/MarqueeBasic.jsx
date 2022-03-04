import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeBasic = props => {
  /*
  Props
  */
  const { delay, hoverEffect, speed, gradientColor, gradientWidth } = props;
  /*
  State
  */
  const [hovered, setHovered] = useState(false);

  //_____Event Handlers
  const onPointerOver = () => {
    setHovered(true);
    // console.log('<MarqueeBasic> / hovered:', hovered);
    // console.log('<MarqueeBasic> / barsStyle:', barsStyle);
  };
  const onPointerOut = () => {
    setHovered(false);
    // console.log('<MarqueeBasic> / hovered:', hovered);
  };
  return (
    <div onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      <Marquee
        delay={delay || 1.5}
        speed={hoverEffect ? (!hovered ? speed : speed * 0.6) : speed}
        direction={hoverEffect ? (!hovered ? 'left' : 'right') : 'left'}
        // style={style}
        gradientColor={gradientColor || [0, 0, 0]} // props or default
        gradientWidth={gradientWidth || 50}
      >
        {props.children}
      </Marquee>
    </div>
  );
};

export default MarqueeBasic;
