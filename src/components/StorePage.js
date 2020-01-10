import React from "react";
import store from "../store";
import StoreItem from "./StoreItem";

class StorePage extends React.Component {
  onClickHandler = id => {
    this.props.history.push("products/" + id)
  };

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="storeContainer">
        {store.getState().products.map(item => (
          <StoreItem
            title={item.title}
            imgUrl={item.img}
            price={item.price}
            key={item.id}
            id={item.id}
            onClickHandler={this.onClickHandler}
          />
        ))}
      </div>
    );
  }
}

export default StorePage;
