import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { lastSegmentOfLocation } from '../helpers/path';
import PropTypes from 'prop-types';
import SinglePidForm from '../components/SinglePidForm';

const NavBarContainer = (props) => {

  const { location } = props;
  const pid = lastSegmentOfLocation(location);

  return (
    <React.Fragment>
      <SinglePidForm />
      <ul>
        <li>
          <NavLink to={`/brand/${pid}`}>Brand View</NavLink>
        </li>
        <li>
          <NavLink to={`/episode/${pid}`}>Episode View</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

NavBarContainer.propTypes = {
  location: PropTypes.object
};

export default withRouter(NavBarContainer);
