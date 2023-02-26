import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addcount = () => {
    setCount(count+1);
  };
  const subtractcount = () => {
    setCount(count-1);
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <p> count <br/>
        <button onClick={subtractcount}>-</button> {count} <button onClick={addcount}>+</button>
        </p>

      </header>
    </div>
  );
}

export default App;
