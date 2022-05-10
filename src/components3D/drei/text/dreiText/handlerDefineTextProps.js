const defineTextProps = (textProps, languageVersion, lessThen600) => {
  //   console.log(
  //     'textProps / languageVersion / lessThen600',
  //     textProps,
  //     languageVersion,
  //     lessThen600
  //   );
  /*
  guard clouse; extracts "unique cese" when there is one version for Pl/Ex & mobile/no-mobile; ie one rule for all in form of object {...}
  */
  if (!Array.isArray(textProps)) {
    return textProps;
  }
  /*
  if "textProps" is array & has no-array item => it means that we have two version: mobile vs. no-mobile
  */
  if (Array.isArray(textProps) && !Array.isArray(textProps[0])) {
    if (lessThen600) {
      return textProps[0];
    } else {
      return textProps[1];
    }
  }

  /*
  if "textProps" is array & has array item & it has only one item => it means that we have two version: Pl vs. En
  */
  if (
    Array.isArray(textProps) &&
    Array.isArray(textProps[0]) &&
    textProps[0].length === 1
  ) {
    if (languageVersion) {
      return textProps[1][0];
    } else {
      return textProps[0][0];
    }
  }

  /*
  if "textProps" is array & has array item & it has two item => it means that we have four version: (Pl vs. En) + (mobile vs. no-mobile)

  */
  if (languageVersion) {
    // console.log('..........languageVersion');
    if (lessThen600) {
      return textProps[0][0];
    }
    if (!lessThen600) {
      return textProps[0][1];
    }
  }

  if (!languageVersion) {
    // console.log('..........!languageVersion');

    if (lessThen600) {
      return textProps[1][0];
    }
    if (!lessThen600) {
      return textProps[1][1];
    }
  }
};
export default defineTextProps;
