import React from "react"
import classes from "./Input.module.css"

const Input = ({label, type, placeholder, value, onChange}) => {
  return (
    <div className={classes.container}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
