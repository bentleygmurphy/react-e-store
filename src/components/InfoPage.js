import React from "react";
import store from "../store";
import DisplayInfo from "./DisplayInfo"

class InfoPage extends React.Component {
  renderItem = () => {
    store.subscribe(() => this.forceUpdate());
    const theOne = store
      .getState()
      .products.find(
        item => item.id === Number(this.props.match.params.productid)
      );

    return theOne ? (
      <DisplayInfo
        title={theOne.title}
        desc={theOne.description}
        imgUrl={theOne.img}
        price={theOne.price}
        key={theOne.id}
        rating={theOne.rating}
        id={theOne.id}
      />
    ) : (
      "That Item Does Not Exist"
    );
  };

  render() {
    return this.renderItem();
  }
}

export default InfoPage;
