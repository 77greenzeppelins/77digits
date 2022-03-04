import React from 'react';
import { Link } from 'react-router-dom';

const LinkToPage = ({ path, children }) => {
  /*
  JSX
  */
  return (
    <Link to={path} className="link-to-page__container">
      {children}
    </Link>
  );
};

export default React.memo(LinkToPage);
