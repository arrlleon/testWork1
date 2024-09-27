import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DailyHoursInput from '../DailyHoursInput';
test('Рендер компонента DailyHoursInput и изменение количества часов', () => {
  const onDailyHoursChange = jest.fn();
  render(<DailyHoursInput dailyHours={2} onDailyHoursChange={onDailyHoursChange} />);

  const hoursText = screen.getByText('2');
  expect(hoursText).toBeInTheDocument();

  const decreaseButton = screen.getByText('-');
  fireEvent.click(decreaseButton);

  expect(onDailyHoursChange).toHaveBeenCalledWith(1);

  const increaseButton = screen.getByText('+');
  fireEvent.click(increaseButton);

  expect(onDailyHoursChange).toHaveBeenCalledWith(3);
});
