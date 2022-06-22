import React, { useEffect, useState, useCallback, useMemo } from 'react';
/*
Spring Staff
*/
import { animated, useSpring } from '@react-spring/web';
/*
--------------------------------------------------------------------------------
*/
const FlyingText = () => {
  /*
  Local State
  */
  const [textWidth, setTextWidth] = useState(0);
  const [pipeWidth, setPipeWidth] = useState(0);

  const measuredRefOfText = useCallback(node => {
    if (node !== null) {
      setTextWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const measuredRefOfPipe = useCallback(node => {
    if (node !== null) {
      setPipeWidth(node.getBoundingClientRect().width);
    }
  }, []);

  /*
  ...
  */
  const styles = useSpring({
    from: { x: textWidth + textWidth * 0.1 },
    to: { x: -pipeWidth - textWidth * 0.01 },
    config: { duration: 10000 },
    delay: 4000,
  });

  const t = 'Pozdrowienia z Dzierżoniowa';
  const arrayOfTexts = useMemo(() => [t], [t]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (arrayOfTexts.length < 3) {
  //         arrayOfTexts.push(t);
  //         console.log('arrayOfTexts:', arrayOfTexts);
  //       }
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, [t, arrayOfTexts]);

  /*
  JSX
  */
  return (
    <div className="flying-text__wrapper">
      <div ref={measuredRefOfPipe} className="flying-text__text-pipe">
        {arrayOfTexts.map((t, i) => (
          <animated.p
            key={i}
            ref={measuredRefOfText}
            className="flying-text__text"
            style={{ ...styles }}
          >
            {t}
          </animated.p>
        ))}
      </div>
    </div>
  );
};

export default FlyingText;
