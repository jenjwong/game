import React from 'react';
import Square from './Square';

export default function Row({ item, handleClick, col }) {
  return item.map((val, row) => (
    <Square key={row} val={val} handleClick={handleClick} col={row} row={col} />
  ));
}
