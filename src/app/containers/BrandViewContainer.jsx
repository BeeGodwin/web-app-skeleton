import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

const BrandViewContainer = (props) => {
  
  // eslint-disable-next-line react/prop-types
  const { title, synopsis } = props;

  return (
    <React.Fragment>
      <h1>Brand View</h1> 
      <h2>{title}</h2>
      <div>{synopsis}</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    title: get(state, 'programme.container.title'),
    synopsis: get(state, 'programme.container.synopses.short')
  };
};


export default connect(mapStateToProps)(BrandViewContainer);