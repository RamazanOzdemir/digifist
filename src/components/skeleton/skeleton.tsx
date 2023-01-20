import React from 'react';
import ClassNames from 'classnames';

import './style.scss';

export interface SkeletonProps {
  className?: string;
}

export const Skeleton = React.forwardRef(
  (props: SkeletonProps, forwardRef: any) => {
    const { className } = props;
    const classNames = ClassNames('skeleton', className);

    return <div className={classNames} ref={forwardRef}></div>;
  }
);
