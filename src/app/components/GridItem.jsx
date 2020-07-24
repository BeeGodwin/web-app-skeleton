import React from 'react';
import PropTypes from 'prop-types';

const GridItem = (props) => {

  const { id } = props;
  return (
    <h2>Item: {id}</h2>
  );
};

GridItem.propTypes = {
  id: PropTypes.string
};

export default GridItem;

