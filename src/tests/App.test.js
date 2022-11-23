import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Verificando componente App', () => {
  it('Testanto rota <Home />', () => {
    const { history } = renderWithRouter(<App />);
    const rota = screen.getByRole('link', {
      name: 'Home',
    });

    expect(rota).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });

  it('Testanto rota <About />', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', {
      name: 'About',
    });
    userEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about');
    expect(aboutLink).toBeInTheDocument();
  });

  it('Testando rota Favorite Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', {
      name: 'Favorite Pokémon',
    });
    userEvent.click(favoriteLink);
    expect(history.location.pathname).toBe('/favorites');
    expect(favoriteLink).toBeInTheDocument();
  });
});
