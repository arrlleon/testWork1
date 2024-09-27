import React from 'react';
import Select from 'react-select';

interface ClassSelectorProps {
    selectedСlass: number;
    onClassChange: (option: any) => void;
}

const classOptions = [
  { value: 1, label: '1 аудитория' },
  { value: 2, label: '2 аудитория' },
  { value: 3, label: '3 аудитория' },
  { value: 4, label: '4 аудитория' },
];

const ClassSelector: React.FC<ClassSelectorProps> = ({ selectedСlass, onClassChange }) => (
  <div>
    <Select
      className='selector'
      options={classOptions}
      onChange={onClassChange}
      defaultValue={classOptions[0]}
    />
  </div>
);

export default ClassSelector;

// В переменную classOptions вводите объекты со значение которое будет передаваться и с выводом что увидит пользователь, так можно менять под себя нужные значение