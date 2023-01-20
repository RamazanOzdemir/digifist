import { FC, useCallback, useRef } from 'react';
import ClassNames from 'classnames';
import './style.scss';
import { Skeleton } from '../skeleton';

export interface ImageProps {
  eager?: boolean;
  className?: string;
  src: string;
  alt: string;
}

export const Image: FC<ImageProps> = (props) => {
  const { className, src, alt, eager = false } = props;

  const ref = useRef(null);
  const skeletonRef = useRef(null);

  const classNames = ClassNames('image', className);
  const loading = eager ? 'eager' : 'lazy';

  const handleOnLoad = useCallback(() => {
    if (skeletonRef.current)
      skeletonRef.current.className += ' image__skeleton__disappear';
  }, []);

  return (
    <div className="c-image">
      <Skeleton className="image__skeleton" ref={skeletonRef} />
      <img
        className={classNames}
        src={src}
        alt={alt}
        loading={loading}
        ref={ref}
        onLoad={handleOnLoad}
      />
    </div>
  );
};
