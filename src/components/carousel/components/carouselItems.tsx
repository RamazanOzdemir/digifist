import { CustomComponent } from '@/models';
import ClassNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import '../style.scss';
import { useCarouselContext } from '../hooks';
import React from 'react';

export interface CarouselItemsProps extends CustomComponent {}

export const CarouselItems: FC<CarouselItemsProps> = (props) => {
  const { className, children } = props;

  const { width, index, count, setCount } = useCarouselContext();

  const classNames = ClassNames(['carousel__items', className]);

  useEffect(() => {
    setCount(React.Children.count(children) || 0);
  }, []);

  return (
    <div
      className={classNames}
      style={{
        width: Math.ceil(width * count) | 0,
        transform: `translate3d(-${width * index}px, 0px, 0px)`
      }}
    >
      {children}
    </div>
  );
};
