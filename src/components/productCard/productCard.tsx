import { FC, useCallback, useState } from 'react';
import { Card, CardContent, CardFooter } from '../card';
import { Image } from '../image';
import { ColorSelect } from '../colorSelect';
import { IProductOption } from '@/models';

import './style.scss';

interface ProductCardProps {
  caption: string;
  price: string;
  options: IProductOption[];
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { caption, price, options } = props;

  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleOptionSelect = useCallback((index: number) => {
    setSelectedOption(index);
  }, []);

  const productImage = options[selectedOption]['imgSrc'];

  return (
    <Card className="product-card">
      <CardContent className="product-card__content">
        <Image
          className="product-card__image"
          src={productImage}
          alt="product-1"
        />
      </CardContent>
      <CardFooter>
        <div className="product-card__info">
          <span className="product-card__info__caption">{caption}</span>
          <div className="product-card__info__footer">
            <span className="product-card__info__price">{price}</span>
            <ColorSelect
              handleOptionSelect={handleOptionSelect}
              selectedOption={selectedOption}
              options={options}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
