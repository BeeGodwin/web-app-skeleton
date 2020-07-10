import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import fetchSinglePid from '../helpers/fetchSinglePid';
import { locationWithoutLastSegment } from '../helpers/path';
import { updateProgramme } from '../actions/programme';

const SinglePidForm = (props) => {

  const { dispatch } = props;
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const location = useLocation();

  const onSubmit = ({pidInput}) => {
    fetchSinglePid(pidInput)
    .then(
      (programme) => {
        dispatch(updateProgramme(programme));
        const newLocation = `${locationWithoutLastSegment(location)}/${pidInput}`;
        history.push(newLocation);
      }
    );
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="gs-u-m" htmlFor="pid-input">Find programme by PID</label>
        <input className="gs-u-m" type="text" name="pidInput" ref={register}/>
        <input className="gs-u-m" type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

SinglePidForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SinglePidForm);