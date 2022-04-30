import React from 'react';

/*
Basic Data
*/
import { introGesturePromptData } from '../../gesturePromptData';

/*
-----------------------------------------------------------------------
*/
const TextComponentOfGPTP = ({ textChildCondition }) => {
  return (
    <div className="text-component-of-GPTP__wrapper">
      {introGesturePromptData.textComponentData.map(({ wordPl, wordEn, id }) =>
        textChildCondition ? (
          <p className="text-component-of-GPTP__word" key={id}>
            {wordPl}
          </p>
        ) : (
          <p className="text-component-of-GPTP__word" key={id}>
            {wordEn}
          </p>
        )
      )}
    </div>
  );
};

export default TextComponentOfGPTP;
