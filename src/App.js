import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { withRouter } from 'react-router';

// Components 
import Landing from './Components/Landing/Landing'
import Accessory from './Components/Accessory/Accessory'
import Jacket from './Components/Jacket/Jacket'
import Shirt from './Components/Shirt/Shirt'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/accessories' component={Accessory} />
          <Route path='/jackets' component={Jacket} />
          <Route path='/shirts' component={Shirt} />
        </Switch>
      </div>
    );
  }
}

export default App;
