import { Context, createContext } from 'react';
import { CarouselContextProps } from './props';

export const CarouselContext: Context<CarouselContextProps> = createContext({
  width: 0,
  setWidth: () => {},
  count: 0,
  setCount: () => {},
  index: 0,
  setIndex: () => {}
});
