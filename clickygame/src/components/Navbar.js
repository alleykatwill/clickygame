import React, { Component } from "react";
import "../styles/NavBar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="nav-item">Clicky - A Memory Game</h2>
        <div className="nav-item">
          <h1>Welcome To Dunder Mifflin Clicky Game</h1>
        </div>
        <h3 className="nav-item">
          Current Score: {this.props.score} | High Score: {this.props.highScore}
        </h3>
      </nav>
    );
  }
}
