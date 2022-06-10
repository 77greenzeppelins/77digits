import React from 'react';
/*
----------------------------------------------------------------------
*/
const TogglerButton2 = ({ condition, onClickHandler, style }) => {
  /*
  ...
  */
  //   const onClickHandler = () => {
  //     console.log('TogglerButton2');
  //   };
  /*
  JSX
  */
  return (
    condition && (
      <div
        style={{
          position: 'fixed',
          width: '100px',
          height: '100px',
        }}
      >
        <button
          onClick={onClickHandler}
          style={{
            width: '100%',
            height: '100%',
            fontSize: '2rem',
            color: 'white',
            ...style,
          }}
        >
          X
        </button>
      </div>
    )
  );
};

export default TogglerButton2;
