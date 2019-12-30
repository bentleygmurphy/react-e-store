import React from "react";

import store from "../store";

import StoreItem from "./StoreItem";

class StorePage extends React.Component {
  render() {
    store.subscribe(() => this.forceUpdate());
    return (
      <div className="storeContainer">
          {store.getState().products.map(item => (
              <StoreItem title={item.title} desc={item.description} imgUrl={item.img} key={item.id}/>
          ))}
      </div>
    );
  }
}

export default StorePage;
