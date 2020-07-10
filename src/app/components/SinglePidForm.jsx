import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import fetchSinglePid from '../helpers/fetchSinglePid';
import { updateProgramme } from '../actions/programme';

const SinglePidForm = (props) => {

  const { dispatch } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = formData => {
    fetchSinglePid(formData.pidInput)
    .then(
      (programme) => dispatch(updateProgramme(programme)));
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