import React from 'react';
import Select from 'react-select';

interface LessonTypeSelectorProps {
  lessonType: number;
  onLessonTypeChange: (options: any) => void;
}

const lessonTypeOptions = [
  { value: 45, label: 'Академические' },
  { value: 60, label: 'Астрономические' },
];

const LessonTypeSelector: React.FC<LessonTypeSelectorProps> = ({ lessonType, onLessonTypeChange }) => {

  return (
    <div className="column">
      <Select className='selector' options={lessonTypeOptions} onChange={onLessonTypeChange} defaultValue={lessonTypeOptions[0]} />
    </div>
  );
};

export default LessonTypeSelector;
