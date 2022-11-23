// Começando projeto :ROCKET:
import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Renderizando as informações corretas no componmente <About />.', () => {
  it('Verifica se o elemento h2 é renderizado com o texto "About Pokédex".', () => {
    renderWithRouter(<About />);
    const aboutPokedex = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });

    expect(aboutPokedex).toBeInTheDocument();
  });

  it('Verifica se há duas tag <p> na página About refente a Pokedex.', () => {
    renderWithRouter(<About />);
    const p1 = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i);
    const p2 = screen.getByText(/One can filter Pokémon by type, and see more details for each one of them/i);

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it('Verifica se a imagem da Pokedex é renderizada.', () => {
    renderWithRouter(<About />);
    const pokedex = screen.getByRole('img', {
      alt: /Pokédex/i,
      src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    });

    expect(pokedex).toBeInTheDocument();
  });
});
