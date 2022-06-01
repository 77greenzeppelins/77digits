import React from 'react';
/*
Spring Staff
*/
import { animated, useSpring } from '@react-spring/web';

const HtmlPromptLine = () => {
  /*
  Spring Section
  */
  const spring = useSpring({
    from: { x: ' -110%', opacity: 0 },
    to: { x: '110 %', opacity: 1 },
    config: { duration: 5000 },
    loop: true,
  });

  /*
  JSX
  */
  return (
    <div className="html-gest-prompt__line-wrapper">
      <animated.div className="html-gest-prompt__line-prompt" style={spring} />
    </div>
  );
};

export default HtmlPromptLine;
