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

const MarqueeHelloWorld = () => {
  return (
    <div>
      <MarqueeBasic
        topBottoBars={false}
        hoverEffect={false}
        pauseOnHover={false}
        speed={80}
        delay={0}
        // gradientColor={[255, 255, 255]}
        gradientColor={[0, 0, 0]}
        gradientWidth={0}
        style={{
          userSelect: 'none',
          // height: '50px',
          // display: 'flex',
          // alignItems: 'center',
          beckgroundColor: 'transparent',
        }}
      >
        <MarqueeTextEditor
          text={marqueeHello}
          indexOfChanges={[6]}
          style={{
            color: 'grey',
            fontSize: '5rem',
            letterSpacing: 1,
            whiteSpace: 'pre',
          }}
        />
      </MarqueeBasic>
    </div>
  );
};

export default MarqueeHelloWorld;
