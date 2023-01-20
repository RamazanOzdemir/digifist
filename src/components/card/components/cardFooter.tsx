import { FC, ReactElement } from 'react';
import '../style.scss';
import ClassNames from 'classnames';
import { CustomComponent } from '@/models';

interface CardFooterProps extends CustomComponent {
  className?: string;
}

export const CardFooter: FC<CustomComponent> = (props) => {
  const { className, children } = props;

  const classNames = ClassNames(['card__footer', className]);
  return <div className={classNames}>{children}</div>;
};
