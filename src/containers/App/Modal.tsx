import React, { useState, useEffect } from 'react';
import DaysSelector from '../../components/DaysSelector';
import TotalHoursInput from '../../components/TotalHoursInput';
import LessonTypeSelector from '../../components/LessonTypeSelector';
import DateInput from '../../components/DateInput';
import DailyHoursInput from '../../components/DailyHoursInput';
import TimeSelector from '../../components/TimeSelector';
import BreakSelector from '../../components/BreakSelector';
import TecherSelector from '../../components/TeacherSelector';
import ClassSelector from '../../components/ClassNumber';
import './ModalStyle.css';


const timeOptions = Array.from({ length: 11 }, (_, i) => {
  const hour = (7 + i).toString().padStart(2, '0');
  return { value: `${hour}:00`, label: `${hour}:00` };
});

const Modal: React.FC = () => {
  const [lessonType, setLessonType] = useState<number>(45);
  const [selectedBreak, setSelectedBreak] = useState<number>(0);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedStartTime, setSelectedStartTime] = useState<string>('07:00');
  const [totalHours, setTotalHours] = useState<number>(6);
  const [dailyHours, setDailyHours] = useState<number>(1);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [selectedTeacher, setSelectedTeacher] = useState<any>('Нурсултан Назарбаев')
  const [selectedClass, setSelectedClass] = useState<number>(0)

  useEffect(() => {
    setEndDate(calculateEndDate());
    setEndTime(calculateEndTime());
  }, [startDate, totalHours, dailyHours, selectedDays, selectedBreak, lessonType, selectedStartTime]);

  const handleLessonTypeChange = (option: any) => setLessonType(option.value);
  const handleBreakChange = (option: any) => setSelectedBreak(option.value);
  const handleDaysChange = (days: string[]) => setSelectedDays(days);
  const handleStartTimeChange = (option: any) => setSelectedStartTime(option.value);
  const handleTeacherChange = (option: string) => setSelectedTeacher(option)
  const handleClassChange = (option: any) => setSelectedClass(option.value);


  const addMinutesToTime = (time: string, minutesToAdd: number) => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + minutesToAdd;
    const finalHours = Math.floor(totalMinutes / 60) % 24;
    const finalMinutes = totalMinutes % 60;

    return `${finalHours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`;
    
  };

  const reserveLesson = () => {

    const teacher = JSON.stringify(selectedTeacher.value)

    const data = {
      totalTime: totalHours,
      date: startDate,
      endDate: endDate,
      typeLessonHours: lessonType,
      daysOfWeek: selectedDays,
      break: selectedBreak,
      time: selectedStartTime,
      dailyHours: dailyHours,
      endTimeDaily: endTime,
      teacher: teacher,
      class: selectedClass
    }

    console.log("Всего часов: "+data.totalTime);
    console.log("Начало учебы: "+data.date);
    console.log("Конец учебы: "+data.endDate);
    console.log("Тип урока: "+data.typeLessonHours);
    console.log("Выбраные дни недели: "+data.daysOfWeek);
    console.log("Перерыв: "+data.break);
    console.log("Время начала уроков: "+data.time);
    console.log("Сколько часов в день: "+data.dailyHours);
    console.log("Время конца уроков: "+ data.endTimeDaily);
    console.log("Преподаватель: " + data.teacher);
    console.log("Выбранная аудитория: " + data.class); 
  }


  const calculateEndDate = () => {
    if (selectedDays.length === 0 || dailyHours <= 0) return '';

    const totalLessonMinutes = totalHours * lessonType;
    const lessonDuration = lessonType;
    const breakDuration = selectedBreak * dailyHours;

    let lessonsNeeded = Math.ceil(totalLessonMinutes / lessonDuration);

    const courseStartDate = new Date(startDate);
    const currentDate = new Date(courseStartDate);

    while (lessonsNeeded > 0) {
      const dayOfWeek = currentDate.getDay();
      const dayName = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][dayOfWeek];

      if (selectedDays.includes(dayName)) {
        const dailyAvailableMinutes = dailyHours * lessonType;
        let totalMinutesToday = 0;

        while (lessonsNeeded > 0 && totalMinutesToday + lessonDuration <= dailyAvailableMinutes) {
          totalMinutesToday += lessonDuration;
          if (lessonsNeeded > 1) {
            totalMinutesToday += breakDuration;
          }
          lessonsNeeded--;
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return currentDate.toLocaleDateString(); 
  };

  const calculateEndTime = () => {
    if (selectedDays.length === 0 || dailyHours <= 0) return '';

    const totalLessonMinutes = dailyHours * lessonType;
    const breakDuration = selectedBreak;
    let totalMinutes = 0;

    totalMinutes += totalLessonMinutes + (dailyHours - 1) * breakDuration;
    return addMinutesToTime(selectedStartTime, totalMinutes);
};

return (
    <div className="modal-container">

      <div className='header'>
        <span>Редактировать расписание</span>
      </div>

    <div className='row'>
      <span className='school-mamyr'>Школа "Мамыр"</span>

    </div>

      <div className="row ">
      <div className='firstRow-container'>
          <LessonTypeSelector  lessonType={lessonType} onLessonTypeChange={handleLessonTypeChange} />
      </div>
      <div className='secondRow-container'>
          <TotalHoursInput totalHours={totalHours} onTotalHoursChange={setTotalHours} />
      </div>
      <div className='thirdRow-container'>
          <DateInput startDate={startDate} endDate={endDate} onStartDateChange={setStartDate}/>
      </div>
      </div>

      <div className="row second-row">
        <div className="button-group">
          <DaysSelector onDaysChange={handleDaysChange}/>
        </div>
      </div>

      <div className="row">
        <div className='firstRow-container'>
          <BreakSelector selectedBreak={selectedBreak} onBreakChange={handleBreakChange}/>
        </div>
        <div className='secondRow-container'>
          <DailyHoursInput dailyHours={dailyHours} onDailyHoursChange={setDailyHours}/>
        </div>
        <div className='thirdRow-container'>
          <TimeSelector selectedStartTime={selectedStartTime} endTime={endTime} timeOptions={timeOptions} onStartTimeChange={handleStartTimeChange}/>
        </div>
      </div>

      <div className='row'>
        <div className='fourthRow'>
          <TecherSelector selectedTeacher={selectedTeacher} onTeacherChange={handleTeacherChange}/>
          <ClassSelector selectedСlass={selectedClass} onClassChange={handleClassChange}/>
        </div>
      </div>

      <div className='footer'>
        <button className='cancel'>Отмена</button> 
        {/* кнопка отмены просто для визуального сходства  */}
        <button className='reserve' onClick={reserveLesson}>Добавить расписание</button>
      </div>
    </div>
  );
};

export default Modal;


// Добавил вывод в консоль всей информации из модального окна
// сделал максимальное сходство с примером и соотвествие с ТЗ
// добавил выбор времени начала уроков, для удобства и более гибкого выбора 
// поделил на компоненты для читабельности 
// сделал три теста где нет селекта реакта 