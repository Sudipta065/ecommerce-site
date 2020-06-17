import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route path='/' exact component={ProductList}></Route>
          <Route path='/details' exact component={Details}></Route>
          <Route path='/cart' exact component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>

        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
