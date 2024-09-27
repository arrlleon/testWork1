import React from 'react';
import Select from 'react-select';

interface BreakSelectorProps {
  selectedBreak: number;
  onBreakChange: (option: any) => void;
}

const breakOptions = [
  { value: 0, label: 'Без перерыва' },
  { value: 5, label: '5 минут' },
  { value: 10, label: '10 минут' },
  { value: 15, label: '15 минут' },
];

const BreakSelector: React.FC<BreakSelectorProps> = ({ selectedBreak, onBreakChange }) => (
  <div>
    <Select
      className='selector'
      options={breakOptions}
      onChange={onBreakChange}
      defaultValue={breakOptions.find(option => option.value === selectedBreak)}
    />
  </div>
);

export default BreakSelector;


// В переменную breakOptions вводите объекты со значение которое будет передаваться и с выводом что увидит пользователь, так можно менять под себя нужные значение