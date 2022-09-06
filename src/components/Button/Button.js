import React from 'react'
import styles from './Button.module.css';

const Button = (props) => {
  
  console.log('Button', props);

  const {label, handleClick} = props;

  return <button onClick={handleClick}>{label}</button>
}

export default Button;