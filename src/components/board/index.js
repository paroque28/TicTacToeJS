import React from "react";
import Square from "../square";
export default class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  render() {
    //Aqui es JS
    const status = "Siguiente jugador : X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-now">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-now">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-now">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
