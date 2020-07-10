import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { lastSegmentOfLocation } from '../helpers/path';
import PropTypes from 'prop-types';


const NavBarContainer = (props) => {
  const { register, handleSubmit } = useForm();

  const { location } = props;
  const pid = lastSegmentOfLocation(location);
  const onSubmit = formData => console.log('BEEBUG: data', formData.pidInput);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="gs-u-p" htmlFor="pid-input">Enter pid</label>
        <input className="gs-u-p" type="text" name="pidInput" ref={register}/>
        <input className="gs-u-p" type="submit" value="Submit" />
      </form>
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
