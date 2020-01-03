import React from "react";
import store from "../store";

class ItemDetails extends React.Component {
  render() {
    store.subscribe(() => this.forceUpdate());

    const theOne = store
      .getState()
      .products.find(
        item => item.id === Number(this.props.match.params.productid)
      );

    if (theOne !== undefined) {
      console.log(theOne.title);
    }

    //use state to track if its defined
    return (
        <div className="detailContainer">{}</div>
    );
  }
}

export default ItemDetails;
