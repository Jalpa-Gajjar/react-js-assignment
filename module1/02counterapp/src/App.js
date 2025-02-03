
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter]  = useState(0)
  const addValue = () => {
    setCounter(counter + 1)
  }
  
  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <div className='App'>
      <h1>Counter App</h1>
      <h1 >{counter}</h1>

      <div className='btn'>
      <button onClick={addValue} className="green-button">Increment </button> 

      <button onClick={removeValue} className="red-button">Decrement</button>
      </div>
    </div>
  );
}

export default App;
