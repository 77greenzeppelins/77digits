/*
Basic Data
*/
const s = 0.2;

const DiamondCenter = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M27.056 50.277l6.384 9.168 6.384-9.168-6.384-9.169-6.384 9.169"
    ></path>
  );
};
const DiamondSeven1 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M69.794 7.236L62.605 17.56l-11.843-1.328 7.189-10.324z"
    ></path>
  );
};
const DiamondSeven2 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M69.794 93.317l-11.851 1.318-7.189-10.324 11.844-1.329z"
    ></path>
  );
};

const Seven1Body1 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M7.51.25l8.406 12.073 34.846 3.909 7.189-10.324z"
    ></path>
  );
};

const Seven1Body2 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M33.44 41.108l17.322-24.876 11.843 1.328-22.78 32.717z"
    ></path>
  );
};
const Seven1Body3 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M8.49 76.941l18.566-26.664 6.384 9.168L14.873 86.11z"
    ></path>
  );
};

const Seven1Triangle1 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M.32 10.574L7.51.25l8.406 12.073z"
    ></path>
  );
};
const Seven1Triangle2 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M1.008 87.685l13.865-1.575L8.49 76.94z"
    ></path>
  );
};

const Seven2Body1 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M8.451 23.558l6.384-9.169L33.44 41.11l-6.384 9.168z"
    ></path>
  );
};

const Seven2Body2 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M33.44 59.445l6.384-9.168 22.774 32.705-11.844 1.329z"
    ></path>
  );
};
const Seven2Body3 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M15.916 88.219l34.838-3.908 7.189 10.324-50.434 5.657z"
    ></path>
  );
};

const Seven2Triangle1 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M.985 12.836l13.85 1.553-6.384 9.169z"
    ></path>
  );
};
const Seven2Triangle2 = props => {
  return (
    <path
      {...props}
      fill="#ccc"
      stroke="#ccc"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M.32 89.968l7.19 10.324 8.406-12.073z"
    ></path>
  );
};

export {
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
};
