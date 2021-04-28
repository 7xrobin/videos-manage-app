import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

describe('Test add new video', () => {
  test('Open modal to add new video', () => {
    const addButton = screen.getByText('ADD VIDEO');
    fireEvent.click(addButton);
    const nameInput = screen.getByLabelText('Video name');
    const authorInput = screen.getByLabelText('Video author');
    const categoriesInput = screen.getByLabelText('Video category');
    expect(nameInput).toBeVisible();
    expect(authorInput).toBeVisible();
    expect(categoriesInput).toBeVisible();
  });
  test('Add new video and list it on table', () => {
    const addButton = screen.getByText('ADD VIDEO');
    fireEvent.click(addButton);
    const nameInput = screen.getByLabelText('Video name');
    const authorInput = screen.getByLabelText('Video author');
    const categoriesInput = screen.getByLabelText('Video category');
    const submitButton = screen.getByText('SUBMIT');
    fireEvent.change(nameInput, { target: { value: 'Video Name Test' } });
    fireEvent.change(authorInput, { target: { value: 'Author Name Test' } });
    fireEvent.change(categoriesInput, { target: { value: ['Category test'] } });
    fireEvent.click(submitButton);
    screen.debug(submitButton);
    expect(screen.getByText('Video Name Test')).toBeVisible();
  });
});
