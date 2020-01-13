import React from "react";
import Button from "./Button";

class CartItem extends React.Component {
  render() {
    return (
      <div className="card cartCard" onClick={() => this.props.onClickHandler(this.props.id)}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h5 className="card-text">${this.props.price}</h5>
        </div>
        <Button
          id="removeBtn"
          title="Remove"
          color="danger"
          //does not register?
          onClick={() => this.props.onClickHandler(this.props.id)}
        />
      </div>
    );
  }
}

export default CartItem;
