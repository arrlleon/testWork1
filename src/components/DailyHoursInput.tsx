import React from 'react';

interface DailyHoursInputProps {
  dailyHours: number;
  onDailyHoursChange: (hours: number) => void;
}

const DailyHoursInput: React.FC<DailyHoursInputProps> = ({ dailyHours, onDailyHoursChange }) => {

  const handleDecrease = () => {
    if(dailyHours > 0){
      onDailyHoursChange(dailyHours - 1)
    }
  }

  return <div>
    <div className="row">
      <button className="blue-button left-btn" onClick={handleDecrease}>-</button>
      <span className='numbers-span'>{dailyHours}</span>
      <span className='grey-background-hours'>Часов<p>в день</p></span>
      <button className="blue-button right-btn" onClick={() => onDailyHoursChange(dailyHours + 1)}>+</button>
    </div>
  </div>;
};

export default DailyHoursInput;
