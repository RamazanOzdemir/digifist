import { IProductOption } from '@/models';
import ClassNames from 'classnames';

import { FC } from 'react';

export interface ColorOptionProps extends IProductOption {
  index: number;
  selectedOption: number;
  handleOptionSelect: (i: number) => void;
}

export const ColorOption: FC<ColorOptionProps> = (props) => {
  const { color, isAvailable, index, selectedOption, handleOptionSelect } =
    props;

  const classNames = ClassNames('color-select__option', {
    ['color-select__option--selected']: selectedOption == index,
    ['color-select__option--disabled']: !isAvailable
  });

  const handleClick = () => {
    handleOptionSelect(index);
  };

  return (
    <div className={classNames} onClick={handleClick}>
      <span style={{ backgroundColor: color }}></span>
    </div>
  );
};
