import { FC } from 'react';
import './style.scss';
import ClassNames from 'classnames';
import { CustomComponent } from '@/models';

interface CardProps extends CustomComponent {
  className?: string;
}

export const Card: FC<CustomComponent> = (props) => {
  const { className, children } = props;

  const classNames = ClassNames(['card', className]);
  return <div className={classNames}>{children}</div>;
};
