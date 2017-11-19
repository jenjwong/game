import React, { Component } from 'react';
import Row from './Row';
import './index.css';

class App extends Component {
  state = {
    board: [[null, null, null], [null, null, null], [null, null, null]],
    marks: [-1, 1],
    count: 0,
    hasWinner: false,
  };

  renderMove = e => {
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;
    if (this.state.board[row][col] === null) {
      this.setState((prevState, props) => {
        let newBoard = [...prevState.board];
        newBoard[row][col] = this.state.marks[
          this.state.count % this.state.marks.length
        ];
        this.state.count++;
        console.log(this.hasWinner());
        return { ...prevState, board: newBoard };
      });
    }
  };

  hasWinner = () => {
    let winner = false;
    this.state.board.reduce((acc, item) => {
      let result = item.reduce((a, i) => {
        console.log(i, 'itme');
        a = a + i;
        return a;
      }, 0);
      console.log(result, 'result');
      if (Math.abs(result) === 3) {
        acc = true;
        winner = this.state.board[item][0];
      }
      return acc;
    }, false);
    return winner;
  };

  handleClick = e => {
    this.renderMove(e);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="Board">
            {this.state.board.map((item, col) => (
              <Row
                item={item}
                key={col}
                handleClick={this.handleClick}
                col={col}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
