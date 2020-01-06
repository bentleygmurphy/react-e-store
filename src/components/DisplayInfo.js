import React from "react";
import Button from "./Button";

class DisplayInfo extends React.Component {
  onClickHandler = () => {
    console.log("hi");
  };
  render() {
    return (
      //Style this later
      <div className="detailContainer">
        <h3>{this.props.title}</h3>
        <h5>{this.props.rating} / 5</h5>
        <img src={this.props.imgUrl} className="cardImg" alt="..." />
        <div>
          <p>{this.props.desc}</p>
          <h6>${this.props.price}</h6>
          <Button
            title="Add to Cart"
            color="primary"
            onClickHandler={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default DisplayInfo;
