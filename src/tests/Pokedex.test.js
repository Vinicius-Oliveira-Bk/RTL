import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const getH2 = screen.getByRole('heading', {
      name: /Encountered Pokémon/i,
      level: 2 });
    const btn = screen.getByRole('button', {
      name: /Próximo Pokémon/i,
    });

    expect(getH2).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    const dataTest = 'data-testid';
    const id = 'pokemon-type-button';
    renderWithRouter(<App />);
    const eletric = screen.getByRole('button', { name: /electric/i });
    const fire = screen.getByRole('button', { name: /fire/i });
    const bug = screen.getByRole('button', { name: /bug/i });
    const poison = screen.getByRole('button', { name: /poison/i });
    const psychic = screen.getByRole('button', { name: /psychic/i });
    const normal = screen.getByRole('button', { name: /normal/i });
    const dragon = screen.getByRole('button', { name: /dragon/i });

    expect(eletric.getAttribute(dataTest)).toBe(id);
    expect(fire.getAttribute(dataTest)).toBe(id);
    expect(bug.getAttribute(dataTest)).toBe(id);
    expect(poison.getAttribute(dataTest)).toBe(id);
    expect(psychic.getAttribute(dataTest)).toBe(id);
    expect(normal.getAttribute(dataTest)).toBe(id);
    expect(dragon.getAttribute(dataTest)).toBe(id);
  });

  it('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', {
      name: /All/i,
    });
    userEvent.click(all);

    expect(all).toBeInTheDocument();
  });
});
