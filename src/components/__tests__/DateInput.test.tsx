import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DateInput from '../DateInput';
test('Рендер компонента DateInput и изменение даты', () => {
  const onStartDateChange = jest.fn();
  const startDate = '2024-09-26';
  const endDate = '2024-10-26';

  render(<DateInput startDate={startDate} endDate={endDate} onStartDateChange={onStartDateChange} />);

  // Проверяем, что начальная и конечная даты рендерятся корректно
  const startDateInput = screen.getByDisplayValue(startDate);
  const endDateText = screen.getByText(endDate);
  expect(startDateInput).toBeInTheDocument();
  expect(endDateText).toBeInTheDocument();

  // Имитируем изменение даты
  fireEvent.change(startDateInput, { target: { value: '2024-09-30' } });

  // Проверяем, что функция изменения даты была вызвана с правильной датой
  expect(onStartDateChange).toHaveBeenCalledWith('2024-09-30');
});


