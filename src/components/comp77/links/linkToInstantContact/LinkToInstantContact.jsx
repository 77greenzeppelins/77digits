import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const LinkToInstantContact = ({ contact, children, style }) => {
  //_____References
  const link = useRef(null);
  //_____OnClick Handler for 'MAILTO'
  const onClick = (e, contact) => {
    e.preventDefault();
    window.location = contact;
  };
  //
  //_____JSX
  return (
    <>
      <Link
        ref={link}
        to="#"
        onClick={e => onClick(e, contact)}
        className="link-to-instant-contact__container"
        style={style}
      >
        {children}
      </Link>
    </>
  );
};

export default React.memo(LinkToInstantContact);
