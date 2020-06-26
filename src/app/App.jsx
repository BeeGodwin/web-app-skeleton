import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import BrandViewContainer from './containers/BrandViewContainer';
import EpisodeViewContainer from './containers/EpisodeViewContainer';
import ErrorContainer from './containers/ErrorContainer';
import NavBarContainer from './containers/NavBarContainer';


const App = (props) => {
  const { pid } = props;
  console.log('BEEBUG: pid', pid);
  return (
    <React.Fragment>
      <NavBarContainer pid={pid}/>
      <Switch>
        <Route path='/brand/:pid'><BrandViewContainer /></Route>
        <Route path='/episode/:pid'><EpisodeViewContainer /></Route>
        <Route path='/'><h1>Home</h1></Route>
        <Route><ErrorContainer /></Route>
      </Switch>
    </React.Fragment>
  );
};

App.propTypes = {
  pid: PropTypes.string
};

export default App;
