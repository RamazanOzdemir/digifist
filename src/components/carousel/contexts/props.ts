import { Dispatch, SetStateAction } from 'react';

export interface CarouselContextProps {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}
