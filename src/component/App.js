import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ToDo from './ToDo';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ToDo}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}