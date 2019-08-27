import React from "react";

const Option = (props) => (
  <li className='widget__option'>
    {props.index + '.' + props.optionText}
    <button className='button--link'
      onClick={(e) => {
        e.preventDefault();
        props.handleDeleteOption(props.optionText)
      }}
    >
      remove
    </button>
  </li>
)

export default Option;