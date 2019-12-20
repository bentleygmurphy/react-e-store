import React from "react";

import store from "../store";

import StoreItem from "./StoreItem";

class StorePage extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div>
        <StoreItem />
        <ul>
          {store.getState().products.map(item => (
            <li key={item.id}>
              {item.title} {item.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StorePage;
