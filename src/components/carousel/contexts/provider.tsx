import { useState } from 'react';
import { CarouselContext } from './context';

export const CarouselProvider = ({ children }) => {
  const [width, setWidth] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  return (
    <CarouselContext.Provider
      value={{ width, setWidth, count, setCount, index, setIndex }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
