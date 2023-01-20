import { FC, ReactElement } from 'react';
import '../style.scss';
import ClassNames from 'classnames';
import { CustomComponent } from '@/models';

interface CardContentProps extends CustomComponent {
  className?: string;
}

export const CardContent: FC<CustomComponent> = (props) => {
  const { className, children } = props;

  const classNames = ClassNames(['card__content', className]);
  return <div className={classNames}>{children}</div>;
};
