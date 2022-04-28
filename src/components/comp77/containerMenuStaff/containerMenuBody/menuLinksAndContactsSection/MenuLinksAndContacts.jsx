import React from 'react';
/*
Components
*/
import TurboToggler from './turboToggler/TurboToggler';
import LinksAndContacts from './LinksAndContacts/LinksAndContacts';

/*
-------------------------------------------------------------------------
*/
const MenuLinksAndContacts = ({ buttonState, setButtonState }) => {
  return (
    <div className="menu-links-and-contacts__wrapper">
      <div className="menu-links-and-contacts__turbo-toggler-container">
        <TurboToggler
          buttonState={buttonState}
          setButtonState={setButtonState}
        />
      </div>
      <div className="menu-links-and-contacts__links-and-contacts-container">
        <LinksAndContacts buttonState={buttonState} />
      </div>
    </div>
  );
};

export default MenuLinksAndContacts;
