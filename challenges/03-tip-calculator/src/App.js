import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * (((percentage1 + percentage2) / 2 / 100));


  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className='TipCalculator'>
      <BillInput bill={bill} onBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        <label>How did you like the service?</label>
      </SelectPercentage >
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        <label>How did your friend like the service?</label>
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div >
  );
}

function BillInput({ bill, onBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder='Bill Amount...'
        value={bill} onChange={(e) => onBill(Number(e.target.value))} />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      {children}
      <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value='0'>Dissatified (0%)</option>
        <option value='5'>It was Okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='15'>Absolutely Amazing (15%)</option>
      </select>
    </div >
  );
}

function Output({ bill, tip }) {
  return (
    <h3>You pay {bill + tip} (${bill} + ${tip} tip)</h3>
  );
}

function Reset({ onReset }) {
  return (
    <button onClick={onReset}>Reset</button>
  );
}

// export default function App() {

//   return (
//     <div className='App'>
//       <TipCalculator />
//     </div>
//   );
// }

// function TipCalculator() {
//   const [bill, setBill] = useState(0);
//   const [percentage1, SetPercentage1] = useState(0);
//   const [percentage2, SetPercentage2] = useState(0);

//   const tip = bill * ((percentage1 + percentage2) / 2 / 100);

//   function handleReset() {
//     setBill('');
//     SetPercentage1(0);
//     SetPercentage2(0);
//   }

//   return (
//     <div>
//       <BillInput bill={bill} onSetBill={setBill} />
//       <SelectPercentage pecentage={percentage1} onSelect={SetPercentage1}>
//         How did you like the service?</SelectPercentage >
//       <SelectPercentage pecentage={percentage2} onSelect={SetPercentage2}>
//         How did your friend like the service? </SelectPercentage >
//       {bill > 0 && (
//         <>
//           <Output bill={bill} tip={tip} />
//           <Reset onReset={handleReset} />
//         </>)}
//     </div>
//   );
// }

// function BillInput({ bill, onSetBill }) {

//   return (
//     <div>
//       <label>How much was the bill?</label>
//       <input type="text" placeholder='Bill Value'
//         value={bill} onChange={(e) => onSetBill(Number(e.target.value))} />
//     </div>
//   );
// }

// function SelectPercentage({ children, percentage, onSelect }) {

//   return (
//     <div>
//       <label>{children}</label>
//       <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
//         <option value='0' >Dissatified (0%)</option>
//         <option value='5' >It was Okay (5%)</option>
//         <option value='10' >It was Good (10%)</option>
//         <option value='15' >Absolutely Amazing (20%)</option>
//       </select>
//     </div>
//   );
// }

// function Output({ bill, tip }) {

//   return (
//     <h3>
//       You pay ${bill + tip}  (${bill} + ${tip} tip)
//     </h3>
//   );
// }

// function Reset({ onReset }) {

//   return (
//     <button onClick={onReset}>Reset</button>
//   );
// }
