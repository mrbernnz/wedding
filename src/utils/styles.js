import { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  handheld: 544
};

export const media = Object.keys(sizes).reduce((hash, screen) => {
  const emSize = sizes[screen] / 16;

  hash[screen] = (...args) => css`
    @media (min-width: ${emSize}rem) {
      ${css(...args)};
    }
  `;

  return hash;
}, {});

export const mediaForNav = (...args) => css`
  @media (max-width: 34rem) {
    ${css(...args)};
  }
`;
