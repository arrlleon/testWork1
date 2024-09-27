import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TotalHoursInput from '../TotalHoursInput'; 

describe('TotalHoursInput', () => {
  test('Рендер компонента и отображение начальных часов', () => {
    render(<TotalHoursInput totalHours={5} onTotalHoursChange={jest.fn()} />);

    const hoursDisplay = screen.getByText('5');
    expect(hoursDisplay).toBeInTheDocument();

    const labelText = screen.getByText('Всего часов');
    expect(labelText).toBeInTheDocument();
  });

  test('Клик по кнопке "+" увеличивает количество часов', () => {
    const mockOnTotalHoursChange = jest.fn();
    render(<TotalHoursInput totalHours={5} onTotalHoursChange={mockOnTotalHoursChange} />);

    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);

    expect(mockOnTotalHoursChange).toHaveBeenCalledWith(6);
  });

  test('Клик по кнопке "-" уменьшает количество часов, если больше 3', () => {
    const mockOnTotalHoursChange = jest.fn();
    render(<TotalHoursInput totalHours={5} onTotalHoursChange={mockOnTotalHoursChange} />);

    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);

    expect(mockOnTotalHoursChange).toHaveBeenCalledWith(4);
  });

  test('Клик по кнопке "-" не уменьшает часы ниже 3', () => {
    const mockOnTotalHoursChange = jest.fn();
    render(<TotalHoursInput totalHours={3} onTotalHoursChange={mockOnTotalHoursChange} />);

    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);

    expect(mockOnTotalHoursChange).not.toHaveBeenCalled();
  });
});


