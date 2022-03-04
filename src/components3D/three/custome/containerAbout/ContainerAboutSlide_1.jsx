import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
/*
Drei Staff
*/
// import { Text } from '@react-three/drei';
import TextVerse from '../../../drei/text/textVerse/TextVerse';
/*
Basic Data
*/
const data = [
  //   {
  //     text: 'Zacznijmy od',
  //     position: [-0.35, 0.5, 0],
  //     rotation: [0, 0, 0],
  //     fontMultiplier: 0.7,
  //   },
  //   {
  //     text: 'prostego równania',
  //     position: [-0.35, 0.45, 0],
  //     rotation: [0, 0, 0],
  //     fontMultiplier: 0.7,
  //   },
  //   {
  //     text: 'Na początek zgódźmy się',
  //     position: [-0.35, 0.5, 0],
  //     rotation: [0, 0, 0],
  //     fontMultiplier: 0.7,
  //   },
  //   {
  //     text: 'co do jednego:',
  //     position: [-0.35, 0.45, 0],
  //     rotation: [0, 0, 0],
  //     fontMultiplier: 0.7,
  //   },
  {
    // text: 'Twój',
    text: 'TWÓJ',
    position: [0.0, 0.4, 0],
    rotation: [0, 0, 0],
    fontMultiplier: 2.5,
  },
  {
    // text: 'potencjał',
    text: 'POTENCJAŁ',

    position: [0.0, 0.3, 0],
    rotation: [0, 0, 0],
    fontMultiplier: 1,
  },
  {
    // text: 'Mój',
    text: 'MÓJ',
    position: [0.0, 0, 0],
    rotation: [0, 0, 0],
    fontMultiplier: 2.5,
  },
  {
    // text: 'potencjał',
    text: 'POTENCJAŁ',
    position: [0.0, -0.1, 0],
    rotation: [0, 0, 0],
    fontMultiplier: 1,
  },
  {
    // text: 'Synergia',
    text: 'SYNERGIA',

    position: [0, -0.5, 0],
    rotation: [0, 0, 0],
    fontMultiplier: 2.5,
  },
];

/*
Fonts sizes for responsivenes sake
*/
const [fontSmall, fontMedium, fontLarge, headerFontFactor] = [
  0.03, 0.037, 0.044, 2,
];
/*
These factors allowes to mimic html/css responsiveness
*/
const [paragrafMobile, paragraphDesktop] = [0.17, 1.5];
const [headerWidthFactor, headerPositionYDesktop, headerPositionYMobile] = [
  0.8, 0.0003, 0.00045,
];

const fakeText =
  'Skoro znalazłeś się w tym miejscu jest dla mnie jasne że poszukujesz jakiegoś rozwiązania w zakresie technologii internetowych. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
// const fakeTextHeader = 'Połączmy szasza potencjałt. ';
const fakeTextHeader = 'POŁĄCZMY NASZE POTENCJAŁY. ';

/*
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
*/
/*
-----------------------------------------------------------------------------
*/
const ContainerAboutSlide_1 = ({ groupProps, geometry, thisMaterial }) => {
  /*
  References
  */
  const group = useRef();
  /*
  useThree() Staff
  */
  const { viewport, size } = useThree();
  const headerPosition = [
    0,
    size.width > 600
      ? size.height * headerPositionYDesktop
      : size.height * headerPositionYMobile,
    0,
  ];
  /*
   */
  useEffect(() => {
    console.log('ContainerAboutSlide_1', group.current);
  }, []);
  /*
  JSX
  */
  return (
    <group ref={group} {...groupProps}>
      <mesh position={[0, 0, 0]} geometry={geometry} material={thisMaterial} />

      <TextVerse
        textProps={{ position: headerPosition }}
        text={fakeTextHeader}
        // textProps={{ position: position, rotation: rotation }}
        font="garamont"
        fontResponsiveness={
          size.width < 400
            ? fontSmall * headerFontFactor
            : size.width < 950
            ? fontMedium * headerFontFactor
            : fontLarge * headerFontFactor
        }
        textAlign="left"
        // anchorX="left"
        maxWidth={
          size.width < 1000 ? viewport.width * paragrafMobile : paragraphDesktop
        }
      />

      <TextVerse
        textProps={{ position: [0, -0.1, 0] }}
        text={fakeText}
        // textProps={{ position: position, rotation: rotation }}
        // font="garamont"
        fontResponsiveness={
          size.width < 400
            ? fontSmall
            : size.width < 950
            ? fontMedium
            : fontLarge
        }
        textAlign="justify"
        maxWidth={
          size.width < 1000 ? viewport.width * paragrafMobile : paragraphDesktop
        }
      />

      {/* {data.map(({ text, position, rotation, fontMultiplier }, index) => (
        <TextVerse
          key={index}
          text={text}
          textProps={{ position: position, rotation: rotation }}
          font="garamont"
          fontResponsiveness={
            viewport.width < 3.0
              ? fontSmall * fontMultiplier
              : viewport.width < 5.5
              ? fontMedium * fontMultiplier
              : fontLarge * fontMultiplier
          }
        />
      ))} */}

      {/*-----Zacznijmy od prostego równania----------------------------*/}
      {/* <TextVerse
        text={data[0].text}
        textProps={{ position: data[0].position }}
        font="garamont"
        fontResponsiveness={
          viewport.width < 3.0
            ? fontSmall
            : viewport.width < 5.5
            ? fontMedium
            : fontLarge
        }
      /> */}
      {/*-----Twój----------------------------*/}
      {/* <TextVerse
        text={data[1].text}
        textProps={{ position: data[1].position }}
        font="garamont"
        fontResponsiveness={
          viewport.width < 3.0
            ? fontSmall * 1.9
            : viewport.width < 5.5
            ? fontMedium * 1.9
            : fontLarge * 1.9
        }
      /> */}
      {/* <TextVerse
        text={data[2].text}
        textProps={{ position: data[2].position }}
        font="garamont"
        fontResponsiveness={
          viewport.width < 3.0
            ? fontSmall * 1.9
            : viewport.width < 5.5
            ? fontMedium * 1.9
            : fontLarge * 1.9
        }
      /> */}
    </group>
  );
};

export default ContainerAboutSlide_1;
