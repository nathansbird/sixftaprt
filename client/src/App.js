import React from 'react';

import Landing from './pages/Landing';
import Team from './pages/Team';
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
      </Switch>
    </div>
  );
}

export default App;