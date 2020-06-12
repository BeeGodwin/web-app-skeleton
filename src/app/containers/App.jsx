import React from 'react';
import { connect } from 'react-redux';


const App = (props) => {
  return <h1>{props.title}</h1>;
};

const mapStateToProps = (state) => {
  return {
  title: state.titles.primary
  };
};

export default connect(mapStateToProps)(App);
