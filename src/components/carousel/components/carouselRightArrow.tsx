import ClassNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { Image } from '@/components/image';
import rightArrow from '@/assets/images/arrow-right.png';
import { useCarouselContext } from '../hooks';

import '../style.scss';

export interface CarouselRightArrowProps {
  className?: string;
}

export const CarouselRightArrow: FC<CarouselRightArrowProps> = (props) => {
  const { className } = props;

  const [disabled, setDisabled] = useState<boolean>(false);

  const { count, index, width, setIndex } = useCarouselContext();

  const ref = useRef(null);

  const classNames = ClassNames([
    'carousel__arrow carousel__right-arrow',
    className,
    {
      ['carousel__arrow--disabled']: disabled || index == count - 1
    }
  ]);

  const handleClick = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    const updateWidth = () => {
      const parentWidth = ref?.current?.parentNode?.clientWidth || 0;
      const currentWidth = Math.ceil(width * count) || 0;

      if (parentWidth >= currentWidth && currentWidth != 0) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    };

    updateWidth();
  }, [width, count]);

  return (
    <div className={classNames} ref={ref}>
      <button className="carousel__arrow__button" onClick={handleClick}>
        <Image src={rightArrow} alt="left" className="carousel__arrow__image" />
      </button>
    </div>
  );
};
