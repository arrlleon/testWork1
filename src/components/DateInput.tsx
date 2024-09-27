import React from 'react';

interface DateInputProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ startDate, endDate, onStartDateChange }) => (
  <div className='dateInput-container'>
    <input className='dateInput' type="date" value={startDate} onChange={(e) => onStartDateChange(e.target.value)} />
    <span className='to'>до</span>
    <span className='endDate'>{endDate}</span>
  </div>
);

export default DateInput;
