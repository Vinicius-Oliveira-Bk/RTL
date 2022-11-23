import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Verificando componente App', () => {
  it('Testanto rota <Home />', () => {
    const historico = createMemoryHistory();
    render(
      <Router history={ historico }>
        <App />
      </Router>
    );
    const rota = screen.getByRole('link', {
      name: 'Home',
    });

    expect(rota).toBeInTheDocument();
    expect(historico.location.pathname).toBe('/');
  });
  it('Testanto rota <About />', () => {
    const historico = createMemoryHistory();
    render(
      <Router history={ historico }>
        <App />
      </Router>
    );
    const rota = screen.getByRole('link', {
      name: 'About',
    });
    // expect(historico.location.pathname).toBe('/about');
    expect(rota).toBeInTheDocument();
  });
  it('Testando rota Favorite Pokémon', () => {
    const historico = createMemoryHistory();
    render(
      <Router history={ historico }>
        <App />
      </Router>
    );
    const rota = screen.getByRole('link', {
      name: 'Favorite Pokémon',
    });

    expect(rota).toBeInTheDocument();
  });
});
