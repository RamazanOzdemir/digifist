import { useContext } from 'react';
import { CarouselContext } from '../contexts';
import { CarouselContextProps } from '../contexts/props';

export const useCarouselContext = () =>
  useContext<CarouselContextProps>(CarouselContext);
