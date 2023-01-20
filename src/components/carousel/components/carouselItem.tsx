import { CustomComponent } from '@/models';
import ClassNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import '../style.scss';
import { useCarouselContext } from '../hooks';

export interface CarouselItemProps extends CustomComponent {}

export const CarouselItem: FC<CarouselItemProps> = (props) => {
  const { className, children } = props;

  const ref = useRef(null);
  const { setWidth } = useCarouselContext();

  const classNames = ClassNames(['carousel__item', className]);

  useEffect(() => {
    const updateWidth = () => {
      const rootDOM = ref?.current;

      setWidth(rootDOM?.offsetWidth + 1 || 0);
    };
    // firstly update width when component did mount
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      // remove event listener
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  );
};
