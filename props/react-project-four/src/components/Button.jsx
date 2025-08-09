import React from 'react'
import App from '../App'
const Button = (props) => {
  return (
    <div>
         {props.children}
        <button onClick={props.handleClick}>
            {props.text}
        </button>
       
    </div>
  )
}

export default Button