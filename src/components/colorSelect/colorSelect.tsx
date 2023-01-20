import { FC, memo } from 'react';
import { ColorOption } from './components';
import ClassNames from 'classnames';
import { IProductOption } from '@/models';

import './style.scss';

export interface ColorSelectProps {
  className?: string;
  options: IProductOption[];
  selectedOption: number;
  handleOptionSelect: (i: number) => void;
}

export const ColorSelect: FC<ColorSelectProps> = memo((props) => {
  const { className, handleOptionSelect, selectedOption, options } = props;

  const classNames = ClassNames('color-select', className);
  return (
    <div className={classNames}>
      {options.map(({ imgSrc, isAvailable, color }, index) => (
        <ColorOption
          index={index}
          key={`color-option-key-${index}`}
          imgSrc={imgSrc}
          color={color}
          isAvailable={isAvailable}
          handleOptionSelect={handleOptionSelect}
          selectedOption={selectedOption}
        />
      ))}
    </div>
  );
});
