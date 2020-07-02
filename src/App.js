import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

// import ProductGrid from './components/ProductGrid'
import Navigation from './Component/Navbar'
import Cart from './Component/Cart'
import ProductGrid from './Component/ProductGrid'

import {GlobalProvider} from './Context/Createcontext'

function App() {
  return (    
      <GlobalProvider>
        <div className="container" >          
          <Router>
          <Navigation />
            <Switch>  
            <Route path="/cart" component={Cart} />
            <Route path="/" component={ProductGrid} />
            </Switch>
          </Router>
        </div>
      </GlobalProvider>
    
  );
}

export default App;