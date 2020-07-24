import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { programmeCollection } from '../models/programmeCollection';
import GridItem from '../components/GridItem';

const ExperienceContainer = (props) => {

  const { programmes } = props;

  return (
    <React.Fragment>
      {programmes.map((item) => GridItem(item))}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const programmesData = state.data.find((module) => module.id && module.id === 'play_queue').data;
  return {
    programmes: programmeCollection(programmesData)
  };
};

ExperienceContainer.propTypes = {
  programmes: PropTypes.array
};

export default connect(mapStateToProps)(ExperienceContainer);