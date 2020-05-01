import React from 'react';

import Landing from './pages/Landing';
import Team from './pages/Team';
import PrayerRoom from './pages/Prayer';
import PrayerList from './pages/PrayerList';
import ThanksPage from './pages/Thanks';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Landing/>
        </Route>
        <Route path="/team">
          <Team/>
        </Route>
        <Route path="/prayer">
          <PrayerRoom/>
        </Route>
        <Route path="/requests">
          <PrayerList/>
        </Route>
        <Route path="/thanks">
          <ThanksPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;