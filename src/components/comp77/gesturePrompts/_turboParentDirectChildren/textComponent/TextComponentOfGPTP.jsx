import React from 'react';
/*
-----------------------------------------------------------------------
*/
const TextComponentOfGPTP = ({ textComponentData, textChildCondition }) => {
  /*
  Check props and return JSXStaff
  */
  const createText = () => {
    if (
      Object.entries(textComponentData).length === 0 &&
      !Array.isArray(textComponentData.text)
    ) {
      return;
    }
    return textComponentData.text.map(({ wordPl, wordEn, id }) =>
      textChildCondition ? (
        <p className="text-component-of-GPTP__word" key={id}>
          {wordPl}
        </p>
      ) : (
        <p className="text-component-of-GPTP__word" key={id}>
          {wordEn}
        </p>
      )
    );
  };

  /*
  JSX
  */
  return (
    <div
      className="text-component-of-GPTP__wrapper"
      style={textComponentData && { ...textComponentData.classWrapperCSS }}
    >
      {createText()}
    </div>
  );
};

export default TextComponentOfGPTP;
