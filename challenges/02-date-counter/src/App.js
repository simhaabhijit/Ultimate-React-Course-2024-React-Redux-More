
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Date counter</h4>
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count);
  console.log(date);

  return (
    <div className="container">
      <div className='counter'>
        <button onClick={() => setStep((s) => (s > 1) ? s - 1 : 0)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className='counter'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p style={{ textAlign: 'center' }}>
        <span>{count === 0
          ? 'Today is '
          : count > 0
            ? `${Math.abs(count)} day(s) from today is `
            : `${Math.abs(count)} day(s) ago was `
        }</span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
