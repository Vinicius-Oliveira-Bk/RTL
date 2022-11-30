import React from 'react';
import { screen } from '@testing-library/react';
import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  const IMAGE_PIKACHU = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  const POKEMON = {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo:
      'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
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
    summary:
      'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
  };
  const SRC_FAVORITE = '/star-icon.svg';

  it('A imagem do pokemon possui o src correto', () => {
    const isFavorite = false;
    renderWithRouter(<Pokemon
      pokemon={ POKEMON }
      isFavorite={ isFavorite }
    />);
    const link = screen.getByRole('link', {
      name: /more details/i,
      href: '/pokemon/25',
    });
    const src = screen.getByRole('img', {
      name: /Pikachu sprite/i,
      src: IMAGE_PIKACHU,
    });
    expect(src).toBeInTheDocument();
    expect(src.getAttribute('src')).toBe(IMAGE_PIKACHU);
    expect(link.getAttribute('href')).toBe('/pokemon/25');
  });

  it('A imagem do pokemon possui o alt <name> sprite', () => {
    const isFavorite = false;
    renderWithRouter(<Pokemon
      pokemon={ POKEMON }
      isFavorite={ isFavorite }
    />);
    const image = screen.getByRole('img', {
      name: /Pikachu sprite/i,
    });
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe(IMAGE_PIKACHU);
  });

  it('A imagem de favorito ⭐ possui o src correto', () => {
    const isFavorite = true;
    renderWithRouter(<Pokemon
      pokemon={ POKEMON }
      isFavorite={ isFavorite }
    />);
    const favoriteImg = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
      src: SRC_FAVORITE,
    });

    expect(favoriteImg.getAttribute('src')).toBe(SRC_FAVORITE);
  });

  it('A imagem de favorito ⭐ possui o alt <name> is marked as favorite', () => {
    const isFavorite = true;
    renderWithRouter(<Pokemon
      pokemon={ POKEMON }
      isFavorite={ isFavorite }
    />);
    const altImage = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
      src: SRC_FAVORITE,
    });

    expect(altImage.getAttribute('alt')).toBe('Pikachu is marked as favorite');
  });

  it('É exibido na tela um texto com o tipo do pokemon', () => {
    const isFavorite = true;
    renderWithRouter(<Pokemon
      pokemon={ POKEMON }
      isFavorite={ isFavorite }
    />);

    const type = screen.getByText('Electric');
    expect(type).toBeInTheDocument();
  });

  it('É exibido na tela um link com o href /pokemon/<id>', () => {
    const isFavorite = true;
    renderWithRouter(<Pokemon
      pokemon={ POKEMON }
      isFavorite={ isFavorite }
    />);

    const link = screen.getByRole('link', {
      name: /More details/i,
      href: 'pokemon/25',
    });

    expect(link).toBeInTheDocument();
  });
});
