import React, { Component } from "react";
import Option from './Option.js';

const Options = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <button
        className='button button--link'
        onClick={props.handleDeleteOptions}
        disabled={!props.hasOptions}
      >remove All
        </button>
    </div>
    {props.options.length === 0 && <p className='widget__message'>Please enter your options!</p>}
    <div>
      {
        props.options.map((option, index) => (
          <Option
            index={index + 1}
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  </div>
)

export default Options;