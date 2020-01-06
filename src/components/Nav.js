import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Store</Link>
        <Link to="/cart">Cart (0)</Link>
      </div>
    );
  }
}

export default Nav;
