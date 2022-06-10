import React from 'react';
/*
----------------------------------------------------------------------
*/
const TogglerButton = ({ condition, onClickHandler, style, id, text }) => {
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
          id={id}
          onClick={onClickHandler}
          style={{
            width: '100%',
            height: '100%',
            fontSize: '2rem',
            color: 'white',
            ...style,
          }}
        >
          {text}
        </button>
      </div>
    )
  );
};

export default TogglerButton;
