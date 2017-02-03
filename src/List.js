import React from 'react';
import './List.css';

export default function Bench(props) {
  /**
   * PROPS:
   * 1. title {string} a title to be displayed
   * 2. handleClick {function} something to do when
   * one item is clicked on.
   * 3. list {Array<string>} a list of strings to be displayed.
   */

  var list = props.list.map((item, i) => {
    return <li key={i} onClick={props.handleClick.bind(null, item, i)}>{item}</li>
  })
  return (
    <div className="list">
      <h1>{props.title}</h1>
      <ul>
        {list}
      </ul>
    </div>
  )
}