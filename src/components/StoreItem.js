import React from "react";

class StoreItem extends React.Component {
  render() {
    return (
      <div className="card" onClick={() => this.props.onClickHandler(this.props.id)}>
        <div className="cardImg">
          <img src={this.props.imgUrl} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-text">${this.props.price}</h6>
        </div>
      </div>
    );
  }
}

export default StoreItem;
