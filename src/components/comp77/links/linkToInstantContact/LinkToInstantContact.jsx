import React from 'react';
/*
Components
*/
import { Link } from 'react-router-dom';
/*
Basic Data
*/
import { businessMail, businessPhone } from '../../../../data/globalData';

/*
-----------------------------------------------------------------
*/
const LinkToInstantContact = ({ type }) => {
  /*
  OnClick Handler for 'MAILTO'
  */
  const onClick = e => {
    e.preventDefault();
    type === 'phone'
      ? (window.location = businessPhone)
      : (window.location = businessMail);
  };
  /*
  JSX
  */
  return (
    <Link
      to="#"
      onClick={e => onClick(e)}
      className="link-to-instant-contact__container"
    />
  );
};

export default React.memo(LinkToInstantContact);
