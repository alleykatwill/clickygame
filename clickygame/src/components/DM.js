import React, { Component } from "react";
import "../styles/DM.css";

export default class DM extends Component {
  render() {
    return (
      <img
        className="img-fluid GOT"
        id={this.props.id}
        src={this.props.src}
        alt={this.props.name}
        onClick={() => this.props.clickHandler(this.props.id)}
      />
    );
  }
}
