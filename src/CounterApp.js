import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const CounterApp = ({value = 10}) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter( counter + 1 );
  };

  const handleMinus = () => {
    setCounter( counter - 1);
  }

  const handleReset = () => {
    setCounter( value )
  }

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleMinus }>-1</button>
    </div>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp;
