import React from "react";

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          e.preventDefault();
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
          </button>
    </div>
  );
}

export default Option;