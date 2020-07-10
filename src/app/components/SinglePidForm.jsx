import React from 'react';
import { useForm } from 'react-hook-form';

const SinglePidForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = formData => console.log('BEEBUG: data', formData.pidInput);

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

export default SinglePidForm;