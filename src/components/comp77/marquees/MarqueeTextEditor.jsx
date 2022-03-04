import React, { useMemo } from 'react';
/*
Hooks
*/
import useDate from '../../../hooks/useDate';

/*
---------------------------------------------------------------------------
*/
const MarqueeTextEditor = ({ text, indexOfChanges, style }) => {
  /*
  Props explanation
  "indexOfChanges" - why in form of array? 
  we check if "length !== 0" to ensure anything was passed; if it was just an integer we couldn't use "index 0" in splice() !
  */
  /*
  Geting date 
  */
  const { today } = useDate();
  /*
  useMemo
  */
  const finalString = useMemo(() => {
    const newArray = [...text];
    if (indexOfChanges.length !== 0) {
      newArray.splice(indexOfChanges[0], 0, today);
      /*
      There is an issu; thera is a space / gap between day name and dot when final string in joined with " ' ' parameter"i.e "space" among array's items;
      How can we join day & dot (only this two items within whole array) befor final joinn(' ') would be applied?
      Fake solution: add "space-items" to marqueeText and use join('') without space...
      */
    } else {
      newArray.splice();
    }
    const finalString = newArray.join('');
    return finalString;
  }, [today, text, indexOfChanges]);

  // useEffect(() => {
  //   console.log('<MarqueeTextEditor> / today: ', today);
  //   console.log('<MarqueeTextEditor> / finalString: ', finalString);
  //   const newA = [...text];
  //   console.log('<MarqueeTextEditor> / newA: ', newA);
  //   console.log('<MarqueeTextEditor> / indexOfChanges: ', indexOfChanges);
  //   console.log('<MarqueeTextEditor> / finalString: ', finalString);
  // }, [indexOfChanges, text, finalString, today]);

  //_____JSX
  return (
    <>
      <p style={style}>{finalString}</p>
    </>
  );
};

export default MarqueeTextEditor;
