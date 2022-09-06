import React from 'react'
import styles from './Div.module.css'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text} !!!</div>
}

export default ExampleComponent;
