import React from 'react';
/*
Spring Staff
*/
import { animated, useSprings } from '@react-spring/web';
import { springConfigs } from '../../../../data/reactSpring';
/*
Children Stass
*/
import {
  DiamondCenter,
  DiamondSeven1,
  DiamondSeven2,
  Seven1Body1,
  Seven1Body2,
  Seven1Body3,
  Seven1Triangle1,
  Seven1Triangle2,
  Seven2Body1,
  Seven2Body2,
  Seven2Body3,
  Seven2Triangle1,
  Seven2Triangle2,
} from './LogoIn13PartsChildren';

const LogoIn13PartsParent = ({ fakeLoaderStateSetter }) => {
  /*
  Array of components
  */
  const logoParts = [
    //___ver2
    // <Seven1Triangle1 key="seven1Triangle-1" />,
    // <Seven1Body1 key="seven1Body-1" />,
    // <DiamondSeven1 key="diamondSeven1" />,
    // <Seven1Body2 key="seven1Body-2" />,
    // <DiamondCenter key="diamondCenter" />, // d i a m o n d
    // <Seven1Body3 key="seven1Body-3" />,
    // <Seven1Triangle2 key="seven1Triangle-2" />,
    // //
    // <Seven2Triangle2 key="seven2Triangle-2" />,
    // <Seven2Body3 key="seven2Body-3" />,
    // <DiamondSeven2 key="diamondSeven2" />,
    // <Seven2Body2 key="seven2Body-2" />,
    // <Seven2Body1 key="seven2Body-1" />,
    // <Seven2Triangle1 key="seven2Triangle-1" />,

    <DiamondCenter key="diamondCenter" />, // d i a m o n d

    <Seven1Body2 key="seven1Body-2" />,
    <Seven1Body3 key="seven1Body-3" />,
    <Seven2Body2 key="seven2Body-2" />,
    <Seven2Body1 key="seven2Body-1" />,

    <Seven1Triangle2 key="seven1Triangle-2" />,
    <Seven2Triangle1 key="seven2Triangle-2" />,

    <DiamondSeven1 key="diamondSeven1" />,
    <DiamondSeven2 key="diamondSeven2" />,

    <Seven1Body1 key="seven1Body-1" />,
    <Seven2Body3 key="seven2Body-3" />,

    <Seven1Triangle1 key="seven1Triangle-1" />,
    <Seven2Triangle2 key="seven2Triangle-1" />,
  ];
  /*
  Springs Section
  */
  const springs = useSprings(
    logoParts.length,
    logoParts.map((item, index) => {
      return {
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 },
        // config: { duration: 200 },
        config: springConfigs.molasses,
        /*
        "600" is an offset that "skips" initial-opacity-animation of <FakeLoader>; 
        "less then 7" are indices of "seven1"; i.e. "seven1" has a bit different delay then "seven2"
         */
        // delay: index < 7 ? 600 + index * 300 : 2400 + index * 200,
        delay:
          index === 0
            ? 400
            : index > 0 && index < 5
            ? 1000
            : index === 5 || index === 6
            ? 1500
            : index === 7 || index === 8
            ? 2800
            : index === 9 || index === 10
            ? 3000
            : 3300,

        onRest: () => {
          /*
          in case of last animation this staff should be evaluated
          */
          if (index === logoParts.length - 1) {
            // console.log('item index: ', index);
            fakeLoaderStateSetter(false);
          }
          // fakeLoaderStateSetter(false);
        },
      };
    })
  );
  /*
  Springs to Components Section
  */
  const SpringsToComponents = springs.map((animatedSyle, index) => (
    <animated.g
      style={{
        transformOrigin: 'center',
        transformBox: 'fill-box',
        ...animatedSyle,
      }}
      key={index}
    >
      {logoParts[index]}
    </animated.g>
  ));
  /*
  JSX
  */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="265"
      // height="380"
      width="132.5"
      height="190"
      version="1.1"
      viewBox="0 0 70.115 100.542"
    >
      {SpringsToComponents}
    </svg>
  );
};

export default LogoIn13PartsParent;

//___ver1
// <DiamondCenter key="diamondCenter" />,
// <Seven1Triangle1 key="seven1Triangle-1" />,
// <Seven1Triangle2 key="seven1Triangle-2" />,
// <DiamondSeven1 key="diamondSeven1" />,
// <Seven1Body1 key="seven1Body-1" />,
// <Seven1Body2 key="seven1Body-2" />,
// <Seven1Body3 key="seven1Body-3" />,
//
// <Seven2Triangle1 key="seven2Triangle-1" />,
// <Seven2Triangle2 key="seven2Triangle-2" />,
// <DiamondSeven2 key="diamondSeven2" />,
// <Seven2Body1 key="seven2Body-1" />,
// <Seven2Body2 key="seven2Body-2" />,
// <Seven2Body3 key="seven2Body-3" />,

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M69.794 93.317l-11.851 1.318-7.189-10.324 11.844-1.329z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M27.056 50.277l6.384 9.168 6.384-9.168-6.384-9.169-6.384 9.169"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M69.794 7.236L62.605 17.56l-11.843-1.328 7.189-10.324z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M15.916 88.219l34.838-3.908 7.189 10.324-50.434 5.657z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M33.44 59.445l6.384-9.168 22.774 32.705-11.844 1.329z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M8.451 23.558l6.384-9.169L33.44 41.11l-6.384 9.168z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M.32 89.968l7.19 10.324 8.406-12.073z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M.985 12.836l13.85 1.553-6.384 9.169z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M33.44 41.108l17.322-24.876 11.843 1.328-22.78 32.717z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M8.49 76.941l18.566-26.664 6.384 9.168L14.873 86.11z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M7.51.25l8.406 12.073 34.846 3.909 7.189-10.324z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M1.008 87.685l13.865-1.575L8.49 76.94z"
      ></path> */

/* <path
        fill="#ccc"
        stroke="#ccc"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.066"
        d="M.32 10.574L7.51.25l8.406 12.073z"
      ></path> */
