import React from 'react';
import Select from 'react-select';

interface BreakSelectorProps {
  selectedTeacher: string;
  onTeacherChange: (option: any) => void;
}

const techerOptions = [
  { value: "Нурсултан Назарбаев", label: 'Н. Назарбаев' },
  { value: "Владимир Путин", label: 'В. Путин' },
  { value: "Дональд Трамп", label: 'Д. Трамп' },
  { value: "Катипаш Кыргызалиева", label: 'Катипаш Кыргызалиева' },
];

const TecherSelector: React.FC<BreakSelectorProps> = ({ selectedTeacher, onTeacherChange }) => (
  <div>
    <Select
      className='teacher-selector'
      options={techerOptions}
      onChange={onTeacherChange}
      defaultValue={techerOptions[0]}
    />
  </div>
);

export default TecherSelector;