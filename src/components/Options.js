import React, { Component } from "react";
import Option from './Option.js';

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
        disabled={!props.hasOptions}
      >remove All</button>
      {props.options.length === 0 && <p>No options yet!</p>}
      <div>
        {props.options.length > 0 && 'Your Options'}
        {
          props.options.map((option) => (
            <Option
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>

    </div>
  );
}
export default Options;