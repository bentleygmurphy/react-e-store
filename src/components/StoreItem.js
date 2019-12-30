import React from "react";
import ItemDetails from "./ItemDetails";

class StoreItem extends React.Component {

    //this does not work yet
  onClickHandler() {
      console.log('hi')
    return (
        <ItemDetails />
    )
  }

  render() {
    return (
      <div className="card" onClick={this.onClickHandler}>
        <div className="cardImg">
          <img src={this.props.imgUrl} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default StoreItem;
