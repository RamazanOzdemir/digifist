import ClassNames from 'classnames';
import { FC } from 'react';
import { Image } from '@/components/image';
import leftArrow from '@/assets/images/arrow-left.png';
import { useCarouselContext } from '../hooks';

import '../style.scss';

export interface CarouselLeftArrowProps {
  className?: string;
}

export const CarouselLeftArrow: FC<CarouselLeftArrowProps> = (props) => {
  const { className } = props;

  const { count, index, setIndex } = useCarouselContext();

  const classNames = ClassNames([
    'carousel__arrow carousel__left-arrow',
    className,
    {
      ['carousel__arrow--disabled']: index == 0
    }
  ]);

  const handleClick = () => {
    setIndex(index - 1);
  };

  return (
    <div className={classNames}>
      <button className="carousel__arrow__button" onClick={handleClick}>
        <Image src={leftArrow} alt="left" className="carousel__arrow__image" />
      </button>
    </div>
  );
};
