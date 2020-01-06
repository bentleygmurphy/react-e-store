import React from "react";
import CartItem from "./CartItem";
import Button from "./Button";

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <CartItem />
        <Button
          title="Checkout ($0)"
          color="success"
          onClickHandler={this.onClickHandler}
        />
      </div>
    );
  }
}

export default CartPage;
