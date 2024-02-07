
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
// DateCounter V1
// function DateCounter() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   const date = new Date();
//   console.log(date);
//   date.setDate(date.getDate() + count);
//   console.log(date);

//   return (
//     <div className="container">
//       <div style={{ textAlign: 'center', fontWeight: 'bold' }}>V1</div>
//       <div className='counter'>
//         <button onClick={() => setStep((s) => (s > 1) ? s - 1 : 0)}>-</button>
//         <div>Step: {step}</div>
//         <button onClick={() => setStep((s) => s + 1)}>+</button>
//       </div>
//       <div className='counter'>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <div>Count: {count}</div>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>
//       <p style={{ textAlign: 'center' }}>
//         <span>{count === 0
//           ? 'Today is '
//           : count > 0
//             ? `${Math.abs(count)} day(s) from today is `
//             : `${Math.abs(count)} day(s) ago was `
//         }</span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }


// // DateCounter V2
function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count);
  console.log(date);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div style={{ textAlign: 'center', fontWeight: 'bold' }}>V2</div>
      <div className='counter'>
        <input type="range" min="0" max="10" value={step}
          onChange={(e) => setStep(+e.target.value)} />
        <div>Step: {step}</div>
      </div>
      <div className='counter'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type='text' placeholder='Count' value={count}
          onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>{count === 0
          ? 'Today is '
          : count > 0
            ? `${Math.abs(count)} day(s) from today is `
            : `${Math.abs(count)} day(s) ago was `
        }</span>
        <span>{date.toDateString()}</span>
      </p>
      {(step !== 1 || count !== 0) && <button onClick={handleReset}>Reset</button>}
    </div >
  );
}

export default App;
