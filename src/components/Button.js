import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClickHandler}
        type="button"
        className={"btn btn-" + this.props.color}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Button;
