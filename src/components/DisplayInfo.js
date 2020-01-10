import React from "react";
import Button from "./Button";
import store from "../store";

class DisplayInfo extends React.Component {
  onClickHandler = () => {
    store.dispatch({
        type: "ADD_TO_CART",
        productid: this.props.id
      });
  };

  componentDidMount() {
    store.subscribe(() => {
        this.forceUpdate()
        console.log(store.getState().cart)
    });
  }
  
  render() {
    return (
      <div className="detailContainer">
        <h3>{this.props.title}</h3>
        <h5>{this.props.rating} / 5</h5>
        <img src={this.props.imgUrl} className="cardImg" alt="..." />
        <div>
          <p>{this.props.desc}</p>
          <h6>${this.props.price}</h6>
        </div>
        <Button
            title="Add to Cart"
            color="primary"
            onClickHandler={this.onClickHandler}
          />
      </div>
    );
  }
}

export default DisplayInfo;
