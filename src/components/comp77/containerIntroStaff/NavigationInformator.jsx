import React from 'react';

const NavigationInformator = () => {
  return (
    <div className="navigation-informator__wrapper">
      {/* <p className="navigation-informator__text-line">góra</p> */}
      <div className="navigation-informator__arrow-wrapper">
        <div className="navigation-informator__arrow-up" />
      </div>

      <p className="navigation-informator__text-line">przesuń / scroll</p>
      {/* <p className="navigation-informator__text-line">scroll</p> */}
      <div className="navigation-informator__arrow-wrapper">
        <div className="navigation-informator__arrow-down" />
      </div>

      {/* <div className="navigation-informator__text-line">dół</div> */}
    </div>
  );
};

export default NavigationInformator;
