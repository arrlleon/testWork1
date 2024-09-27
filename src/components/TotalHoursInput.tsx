import React from 'react';

interface TotalHoursInputProps {
  totalHours: number;
  onTotalHoursChange: (hours: number) => void;
}

const TotalHoursInput: React.FC<TotalHoursInputProps> = ({ totalHours, onTotalHoursChange }) => {
  const handleIncrease = () => {
    onTotalHoursChange(totalHours + 1);
  };

  const handleDecrease = () => {
    if (totalHours > 3) {
      onTotalHoursChange(totalHours - 1);
    }
  };

  return (
    <div className="total-hours-input">
      <div className="input-container row">
        <button className="blue-button left-btn" onClick={handleDecrease}>-</button>
        <span className="numbers-span">{totalHours}</span>
        <span className='grey-background-hours'>Всего часов</span>
        <button className="blue-button right-btn" onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default TotalHoursInput;

