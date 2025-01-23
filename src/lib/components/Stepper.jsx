import React from 'react';

export default function Stepper({ currentStep, numberOfSteps, style }) {
  const activeColor = (index) => (currentStep - 1 >= index ? 'bg-blue-500' : 'bg-gray-300');
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className={`flex flex-col items-center gap-4`} style={style}>
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-6 h-6 rounded-full ${activeColor(index)}`}
            style={{ transition: 'background-color 0.3s ease' }}
          ></div>
          {isFinalStep(index) ? null : (
            <div
              className={`h-12 w-1 ${activeColor(index)}`}
              style={{ transition: 'background-color 0.3s ease' }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
