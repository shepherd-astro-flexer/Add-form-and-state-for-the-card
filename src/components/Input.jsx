import React, { useState } from "react";
import PropTypes from "prop-types";

function Input(props) {
  return <input value={props.value} onChange={props.change} type="text" className={props.class} placeholder={props.placeholder} maxLength={props.max} />
}

Input.propTypes = {
  class: PropTypes.string,
  placeholder: PropTypes.string,
  change: PropTypes.func,
  value: PropTypes.string,
  max: PropTypes.string
}

function Label(props) {
  return <label>{props.name}</label>
}

Label.propTypes = {
  name: PropTypes.string
}

export default Input;
export { Label };