import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const App = (props) => {
  return <h1 className={'gs-o-bullet gs-u-float-right'}>{props.title}</h1>;
};

const mapStateToProps = (state) => {
  return {
  title: state.titles.primary
  };
};

App.propTypes = {
  title: PropTypes.string
};

export default connect(mapStateToProps)(App);
