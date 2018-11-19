import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { configure } from 'mobx';

import Home from './Home';

import './App.scss';

configure({enforceActions: 'observed'});

const App = () => (
  <div className="content">
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
