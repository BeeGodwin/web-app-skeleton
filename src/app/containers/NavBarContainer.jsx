import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { lastSegmentOfLocation } from '../helpers/path';
import PropTypes from 'prop-types';

const NavBarContainer = (props) => {
  const { location } = props;
  
  const pid = lastSegmentOfLocation(location);

  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to={`/brand/${pid}`}>Brand View</Link>
        </li>
        <li>
          <Link to={`/episode/${pid}`}>Episode View</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

NavBarContainer.propTypes = {
  location: PropTypes.object
};

export default withRouter(NavBarContainer);
