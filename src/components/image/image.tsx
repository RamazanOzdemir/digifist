import { FC } from 'react';
import ClassNames from 'classnames';
import './style.scss';

export interface ImageProps {
  eager?: boolean;
  className?: string;
  src: string;
  alt: string;
}

export const Image: FC<ImageProps> = (props) => {
  const { className, src, alt, eager = false } = props;

  const classNames = ClassNames('image', className);
  const loading = eager ? 'eager' : 'lazy';

  return <img className={classNames} src={src} alt={alt} loading={loading} />;
};
