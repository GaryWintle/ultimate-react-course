import { useState } from 'react';
import './index.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((nextStep) => nextStep + 1);
  };

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((visibility) => !visibility)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}> {messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈🏻</span>Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>👉🏻</span>
            </Button>
            <Button
              textColor="orangered"
              bgColor="green"
              onClick={handlePrevious}
            >
              Talk to the hand!
            </Button>
          </div>
          <div className="card-outer">
            <div className="card"></div>
          </div>
          <StepMessage step={step}> Wowee Zowee!</StepMessage>
        </div>
      )}
    </div>
  );
}

const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
};

export default App;
