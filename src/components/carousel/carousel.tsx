import { CustomComponent } from '@/models';
import ClassNames from 'classnames';
import { FC } from 'react';
import { CarouselProvider } from './contexts';
import './style.scss';

interface CarouselProps extends CustomComponent {}

export const Carousel: FC<CarouselProps> = (props) => {
  const { className, children } = props;

  const classNames = ClassNames(['carousel', className]);

  return (
    <CarouselProvider>
      <div className={classNames} role="carousel">
        {children}
      </div>
    </CarouselProvider>
  );
};
