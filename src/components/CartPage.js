import React from "react";
import CartItem from "./CartItem";
import Button from "./Button";
import store from "../store";

class CartPage extends React.Component {
  getProducts() {
    // this will return a new array of just the products that match an id in the cart array
    return store.getState().products.filter(p => {
      // this will return the index of the product id in the cart array
      return store.getState().cart.findIndex(c => c === p.id) !== -1;
    });
  }

  //does not work yet, button does not register event
  remove = id => {
    store.dispatch({
      type: "REMOVE_FROM_CART",
      productid: id
    });
    console.log('hi')
  }

  checkout() {
    console.log("Checking Out...")
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
    console.log(this.getProducts())
  }

  render() {
    return (
      <div>
        <div className="cartContainer">
          {this.getProducts().map(item => (
            <CartItem
              title={item.title}
              price={item.price}
              key={item.id}
              id={item.id}
              onClickHandler={this.remove}
            />
          ))}
        </div>
        <Button
          id="checkoutBtn"
          title="Checkout ($0)"
          color="success"
          onClickHandler={this.checkout}
        />
      </div>
    );
  }
}

export default CartPage;
