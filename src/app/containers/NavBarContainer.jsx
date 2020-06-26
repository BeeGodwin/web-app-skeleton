import React from 'react';
import { Link } from 'react-router-dom';

const NavBarContainer = () => {
  return (
    <React.Fragment>
      <Link to="/episode">Episode View</Link>
      <Link to="/brand">Brand View</Link>
    </React.Fragment>
  );
};

export default NavBarContainer;