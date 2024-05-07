import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

type CardProps = {
  className: string | undefined;
  children: ReactNode;
};

function Card({ children, className }: CardProps): React.JSX.Element {
  const classes = clsx(styles.card, className);

  return <div className={classes}>{children}</div>;
}

export default Card;
