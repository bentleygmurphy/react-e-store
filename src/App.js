import React from 'react';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
}from 'react-router-dom'

import StorePage from './components/StorePage';
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className = "nav">
          <Link to = "/">
            Store
          </Link>
          <Link to = "/cart">
            Cart
          </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <StorePage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route render={()=> (<div>404 NOT FOUND</div>)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
