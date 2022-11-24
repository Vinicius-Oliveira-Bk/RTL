import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Verifica o comportamento da página Favorite Pokémon', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<FavoritePokemon />);
    const { pokemonList } = FavoritePokemon.props;
    const range = pokemonList.length;
    const noFavorites = screen.getByText('No favorite Pokémon found');

    expect(range === 0).toBeInTheDocument(noFavorites);
  });

  it('Teste se são exibidos todos os cards de Pokémon favoritados', () => {});
});
