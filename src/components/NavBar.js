import React from "react";
import { Link } from "react-router-dom";
import store from "../store";

class Nav extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="navBar">
        <Link to="/">Store</Link>
        <Link to="/cart">Cart ({store.getState().cart.length})</Link>
      </div>
    );
  }
}

export default Nav;
