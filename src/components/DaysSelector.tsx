import React, { useState } from 'react';

interface DaysSelectorProps {
  onDaysChange: (selectedDays: string[]) => void;
}

const allDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const DaysSelector: React.FC<DaysSelectorProps> = ({ onDaysChange }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [activePreset, setActivePreset] = useState<number | null>(null);

  const handlePreset1 = () => {
    setSelectedDays(['Пн', 'Ср', 'Пт']);
    setActivePreset(1);
    onDaysChange(['Пн', 'Ср', 'Пт']);
  };

  const handlePreset2 = () => {
    setSelectedDays(['Вт', 'Чт']);
    setActivePreset(2);
    onDaysChange(['Вт', 'Чт']);
  };

  const handleManualSelection = (day: string) => {
    const updatedDays = selectedDays.includes(day)
      ? selectedDays.filter(d => d !== day)
      : [...selectedDays, day];
    setSelectedDays(updatedDays);
    setActivePreset(null);
    onDaysChange(updatedDays);
  };

  return (
    <div className='daysOfWeek-container'>
      <button 
        className='left-btn-week daysOfWeek-btn' 
        onClick={handlePreset1} 
        style={{ backgroundColor: activePreset === 1 ? '#3d8ee5' : 'white' }}
      >
        Пн/Ср/Пт
      </button>
      <button 
        className='daysOfWeek-btn' 
        onClick={handlePreset2} 
        style={{ backgroundColor: activePreset === 2 ? '#3d8ee5' : 'white' }}
      >
        Вт/Чт
      </button>
      {allDays.map((day, index) => (
        <button 
          className={`daysOfWeek-btn ${index === allDays.length - 1 ? 'right-btn-week' : ''}`}
          key={day}
          onClick={() => handleManualSelection(day)}
          style={{
            backgroundColor: selectedDays.includes(day) ? '#3d8ee5' : 'white',
          }}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaysSelector;

//Функция с массивом и хуками useState через которую задаешь и передаешь дни недели. Меняешь кнопки меняя масив внутри них, ручной выбор сделан через мап, можно увеличивать или уменьшать массив олдейс тем самым меняя размер