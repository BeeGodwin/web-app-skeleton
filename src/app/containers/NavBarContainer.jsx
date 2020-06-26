import React from 'react';
import { Link } from 'react-router-dom';

const NavBarContainer = (props) => {
  const { pid } = props;
  return (
    <React.Fragment>
      <Link to={`/episode/${pid}`}>Episode View</Link>
      <Link to={`/brand/${pid}`}>Brand View</Link>
    </React.Fragment>
  );
};

export default NavBarContainer;