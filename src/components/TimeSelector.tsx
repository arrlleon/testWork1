import React from 'react';
import Select from 'react-select';

interface TimeSelectorProps {
  selectedStartTime: string;
  endTime: string;
  timeOptions: any[];
  onStartTimeChange: (option: any) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ selectedStartTime, endTime, timeOptions, onStartTimeChange }) => (
  <div>
    <div className="time-range ">
      <Select
        className='timeSelector'
        options={timeOptions}
        onChange={onStartTimeChange}
        defaultValue={timeOptions[0]}
      />
      <span className="to2">до</span>
      <span className='endTime'>{endTime}</span>
    </div>
  </div>
);

export default TimeSelector;
