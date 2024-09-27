import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  test('renders Modal with correct title', () => {
    render(<Modal />);
    const titleElement = screen.getByText(/редактировать расписание/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('clicking "Добавить расписание" button calls reserveLesson', () => {
    console.log = jest.fn();

    render(<Modal />);
    
    const addButton = screen.getByText(/Добавить расписание/i);
    
    fireEvent.click(addButton);
    
    expect(console.log).toHaveBeenCalled();
  });
});
