/* eslint-disable no-undef */
import {
  render, screen, fireEvent, waitFor
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PetCard from './PetCard';
import * as petsService from '../../services/petsService';

jest.mock('../../services/petsService');

describe('PetCard Component', () => {
  it('Should display name', () => {
    expect(1).toBe(1);
  });
});
describe('PetCard Component', () => {
  it('Should display name', () => {
    render(
      <MemoryRouter>
        <PetCard name="Pesho" />
      </MemoryRouter>
    );

    expect(document.querySelector('h3').textContent).toBe('Name: Pesho');
  });

  it('Should increase likes when pet button is pressed', async () => {
    petsService.pet.mockResolvedValue({ likes: 6 });

    render(
      <MemoryRouter>
        <PetCard likes={5} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Pet'));

    await waitFor(() => screen.getByText('Pet'));

    expect(document.querySelector('.pet-info span').textContent).toBe('6');
  });
});
