import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

const EpisodeViewContainer = (props) => {

  // eslint-disable-next-line react/prop-types
  const { primaryTitle, secondaryTitle, tertiaryTitle, synopsis } = props;
  return (
    <React.Fragment>
      <h1>Episode View</h1> 
      <h2>{primaryTitle} - {secondaryTitle} - {tertiaryTitle}</h2>
      <div>{synopsis}</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    primaryTitle: get(state, 'programme.titles.primary'),
    secondaryTitle: get(state, 'programme.titles.secondary'),
    tertiaryTitle: get(state, 'programme.titles.tertiary'),
    synopsis: get(state, 'programme.synopses.short'),
  };
};

export default connect(mapStateToProps)(EpisodeViewContainer);