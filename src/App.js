import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [age,setAge] = useState(0)
  const [high, setHigh] = useState(0)
  const [low, setLow] = useState(0)

  function calculate(){
    const higher = (220 - age) * 0.85
    const lower = (220 - age) * 0.65
    setLow(lower)
    setHigh(higher)
  }
  return (
    <div id="container">
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits:</label><br />
          <output>{low.toFixed(0)} - {high.toFixed(0)}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>

      </form>
    </div>
    
  );
}

export default App;
