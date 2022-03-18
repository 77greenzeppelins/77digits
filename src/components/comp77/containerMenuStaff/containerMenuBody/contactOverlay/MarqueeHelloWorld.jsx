import React from 'react';
/*
Components
*/
import MarqueeBasic from '../../../marquees/MarqueeBasic';
import MarqueeTextEditor from '../../../marquees/MarqueeTextEditor';
/*
Basic Data
*/
import { marqueeHello } from './marqueeText';

const MarqueeHelloWorld = ({ isMobileOnly, specialColor, specialBgColor }) => {
  return (
    <div>
      <MarqueeBasic
        topBottoBars={false}
        hoverEffect={false}
        pauseOnHover={false}
        speed={70}
        delay={2}
        gradientColor={isMobileOnly ? [(255, 255, 255)] : specialBgColor}
        gradientWidth={10}
        style={{
          userSelect: 'none',
          beckgroundColor: 'transparent',
        }}
      >
        <MarqueeTextEditor
          text={marqueeHello}
          indexOfChanges={[4]}
          style={{
            color: isMobileOnly ? 'grey' : specialColor,
            fontSize: '4.5rem',
            letterSpacing: 1,
            whiteSpace: 'pre',
          }}
        />
      </MarqueeBasic>
    </div>
  );
};

export default MarqueeHelloWorld;
