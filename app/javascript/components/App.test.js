/* eslint-disable no-unused-expressions */
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import App from './App';
import Doctors from './doctors/Doctors';

beforeEach(() => render(<App />));

test('Checks if the title is available on home page', () => {
  const { queryAllByTitle } = render(<Doctors />);
  const title = queryAllByTitle('Welcome');
  expect(title).toBeTruthy();
});

test('Renders the title of the home page', () => {
  expect(() => screen.getByText(/LEADING DOCTORS/i)).toThrowError();
});

test('should open add a doctor page', async () => {
  const addADoctor = screen.queryByTitle('add');
  fireEvent.click(addADoctor);

  await waitFor(() => {
    screen.getByText('please select a doctor');
  });

  expect(screen.getByText(/from as low as $120 per month/, { selector: '.input', exact: true })).toBeInTheDocument;
});
