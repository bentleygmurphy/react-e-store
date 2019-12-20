import React from "react";
import "./App.css";
import store from './store'

import Nav from "./components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
    fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
          });
          store.dispatch({
            type: 'SET_PRODUCTS',
            products: result 
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Nav />
        </div>
      );
    }
  }
}

export default App;
