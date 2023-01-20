import { FC } from 'react';
import { Hero } from './hero';
import { Product } from './product';

export const Content: FC = () => {
  return (
    <section className="c-content">
      <Hero />
      <Product />
    </section>
  );
};
