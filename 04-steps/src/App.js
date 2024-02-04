import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps></Steps>
      <Steps></Steps>
    </div>
  );
}

function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1);
  // let [step, setStep] = useState(1);
  // let [testObj, setTestObj] = useState({ name: 'Tom' });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // alert("Previous");
    // if (step > 1) setStep(step - 1);

    // set State based on current value
    // if (step > 1) {
    // wrong way to set State based on current state - wont work
    // setStep(step - 1);
    // setStep(step - 1);
    // // correct way
    // setStep((s) => s - 1);
    // setStep((s) => s - 1);
    // }

    if (step > 1) setStep((s) => s - 1);


    // BAD PRACTICE & Won't work in come cases
    // console.log(step, testObj);
    // if (step > 1) step = step - 1;
    // testObj.name = 'Fred';
    // console.log(step, testObj);
    // GOOD PRACTICE
    // setTestObj({ name: Fred })

  };

  function handleNext() {
    // alert("Next");
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);


    // BAD PRACTICE & Won't work in come cases
    // testObj.name = 'Freddy';
    // GOOD PRACTICE
    // setTestObj({ name: Freddy })
  };

  return (
    // <div>Hello React</div>
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button> */}
      <button className="close" onClick={() => setIsOpen((o) => !o)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div> */}
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {testObj.name} */}
          </p>

          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }}
              // onClick={() => alert('Previous')}
              // onMouseOver={alert('Test')}
              // onMouseOver={() => alert('Test')}
              onClick={handlePrevious}
            >Prev
            </button>
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }}
              // onClick={() => alert('Next')}
              onClick={handleNext}
            >Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}