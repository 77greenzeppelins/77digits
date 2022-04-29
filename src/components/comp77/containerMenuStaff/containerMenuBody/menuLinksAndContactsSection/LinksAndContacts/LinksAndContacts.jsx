import React from 'react';
/*
Components
*/
import LinksToContainers from './linksToContainers/LinksToContainers';
import ContactsResources from './contactsResources/ContactsResources';
/*
Spring Staff
*/
import { animated, useTransition, config } from '@react-spring/web';

/*
---------------------------------------------------------------------------
*/
const LinksAndContacts = ({ buttonState }) => {
  /*
  Spring Section
  */
  const transition = useTransition(buttonState, {
    from: { opacity: 0, display: 'none', scale: 0 },
    enter: { opacity: 1, display: 'flex', scale: 1 },
    leave: { opacity: 0, display: 'none', scale: 0 },
    delay: 100,
    // config: { duration: 400 },
    config: config.molasses,
  });

  /*
  JSX
  */
  return (
    <div className="links-and-contacts__container">
      {transition((styles, condition) =>
        condition ? (
          <animated.div
            style={styles}
            className="links-and-contacts__links-container"
          >
            <LinksToContainers />
          </animated.div>
        ) : (
          <animated.div
            style={styles}
            className="links-and-contacts__contacts-container"
          >
            <ContactsResources />
          </animated.div>
        )
      )}
    </div>
  );
};

export default LinksAndContacts;
