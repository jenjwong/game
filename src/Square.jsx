import React, { Component } from 'react';

export default class Square extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { val, handleClick, row, col } = this.props;
    return (
      <div
        className="Square"
        data-row={row}
        data-col={col}
        onClick={handleClick}
      >
        <span className="SquareText" data-row={row} data-col={col}>
          {val}
        </span>
      </div>
    );
  }
}
