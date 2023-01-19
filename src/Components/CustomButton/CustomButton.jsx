import React from 'react'
import './CustomButton.scss'
const CustomButton = ({textLabel,className,onClick, buttonType}) => {
  return (
    <button
    className={className}
    onClick={onClick}
    type={buttonType}
    >{textLabel}</button>
  )
}

export default CustomButton