import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const calculate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clear = () => {
    setExpression('');
  };

  return (
    <div className="calculator">
      <div className="display">{expression || '0'}</div>
      <div className="buttons">
        <button onClick={clear} className="button button-clear">C</button>
        <button onClick={() => handleClick('/')} className="button button-operator">/</button>
        <button onClick={() => handleClick('*')} className="button button-operator">*</button>
        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleClick('-')} className="button button-operator">-</button>
        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleClick('+')} className="button button-operator">+</button>
        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={calculate} className="button button-equal">=</button>
        <button onClick={() => handleClick('0')} className="button">0</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
      </div>
    </div>
  );
}

export default App;
