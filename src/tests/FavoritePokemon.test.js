import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Verifica o comportamento da página Favorite Pokémon', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', async () => {
    const pokemonList = [];
    renderWithRouter(<FavoritePokemon
      pokemonList={ pokemonList }
    />);
    const noFavorites = await screen.findByText(/No favorite Pokémon found/i);

    expect(noFavorites).toBeInTheDocument();
  });

  it('Teste se são exibidos todos os cards de Pokémon favoritados', async () => {
    const pokemonList = [{
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      averageWeight: {
        value: '6.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Kanto Viridian Forest',
          map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
        },
        {
          location: 'Kanto Power Plant',
          map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
        },
      ],
      summary: 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
    }];
    renderWithRouter(<FavoritePokemon
      pokemonList={ pokemonList }
    />);
    const favorites = await screen.findByRole('img', {
      name: 'Pikachu sprite',
      src: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    });

    expect(favorites).toBeInTheDocument();
  });
});
