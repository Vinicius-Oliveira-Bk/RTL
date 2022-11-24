import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  it('É exibido na tela um h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const pageNotFound = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });

    expect(pageNotFound).toBeInTheDocument();
  });

  it('Existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);
    const imgCrying = screen.getByRole('img', {
      name: /Pikachu crying because the page requested was not found/i,
      src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    });

    expect(imgCrying).toBeInTheDocument();
    expect(imgCrying.getAttribute('src')).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
