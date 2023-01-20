import {
  Carousel,
  CarouselItem,
  CarouselItems,
  CarouselLeftArrow,
  CarouselRightArrow,
  ProductCard
} from '@/components';
import { FC } from 'react';

const products = [
  {
    caption: '365 Signature Hoodie',
    price: '€33.95',
    options: [
      {
        imgSrc: 'assets/images/product-1.png',
        color: '#99C3CC',
        isAvailable: true
      },
      {
        imgSrc: 'assets/images/product-1.png',
        color: '#CC9999',
        isAvailable: true
      },
      {
        imgSrc: 'assets/images/product-1.png',
        color: '#CB99CC',
        isAvailable: false
      },
      {
        imgSrc: 'assets/images/product-1.png',
        color: '#BCD9B2',
        isAvailable: false
      }
    ]
  },
  {
    caption: 'Organic Skinny High Waist Jeans',
    price: '€33.95',
    options: [
      {
        imgSrc: 'assets/images/product-2.png',
        color: '#99C3CC',
        isAvailable: true
      },
      {
        imgSrc: 'assets/images/product-2.png',
        color: '#CC9999',
        isAvailable: true
      },
      {
        imgSrc: 'assets/images/product-2.png',
        color: '#CB99CC',
        isAvailable: false
      },
      {
        imgSrc: 'assets/images/product-2.png',
        color: '#BCD9B2',
        isAvailable: true
      }
    ]
  },
  {
    caption: 'Organic Skinny High Waist Raw Hem Jeans',
    price: '€33.95',
    options: [
      {
        imgSrc: 'assets/images/product-3.png',
        color: '#99C3CC',
        isAvailable: true
      },
      {
        imgSrc: 'assets/images/product-3.png',
        color: '#CC9999',
        isAvailable: true
      },
      {
        imgSrc: 'assets/images/product-3.png',
        color: '#CB99CC',
        isAvailable: true
      },
      {
        imgSrc: 'assets/images/product-3.png',
        color: '#BCD9B2',
        isAvailable: true
      }
    ]
  }
];

export const Product: FC = () => {
  return (
    <section className="c-product">
      <Carousel>
        <CarouselLeftArrow />
        <CarouselRightArrow />
        <CarouselItems>
          {products.map(({ caption, price, options }, index) => (
            <CarouselItem
              className="c-product__carousel-item"
              key={`product-carousel-item-${index}`}
            >
              <ProductCard caption={caption} price={price} options={options} />
            </CarouselItem>
          ))}
        </CarouselItems>
      </Carousel>
    </section>
  );
};
