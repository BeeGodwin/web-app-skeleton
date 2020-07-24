import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BrandViewContainer from './containers/BrandViewContainer';
import EpisodeViewContainer from './containers/EpisodeViewContainer';
import ErrorContainer from './containers/ErrorContainer';
import NavBarContainer from './containers/NavBarContainer';
import ExperienceContainer from './containers/ExperienceContainer';


const App = () => {
  return (
    <React.Fragment>
      <NavBarContainer />
      <Switch>
        <Route path='/brand/'><BrandViewContainer /></Route>
        <Route path='/episode/'><EpisodeViewContainer /></Route>
        <Route path='/experience/'><ExperienceContainer /></Route>
        <Route path='/'><h1>Home</h1></Route>
        <Route><ErrorContainer /></Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
