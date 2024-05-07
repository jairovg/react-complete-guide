import clsx from 'clsx';
import styles from './ExpenseDate.module.scss';
import { Expense } from '../../types';

type ExpenseDateProps = {
  date: Expense['date'];
};

function ExpenseDate({ date }: ExpenseDateProps): React.JSX.Element {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={clsx(styles['expense-date'])}>
      <div className={clsx(styles['expense-date__month'])}>{month}</div>
      <div className={clsx(styles['expense-date__year'])}>{year}</div>
      <div className={clsx(styles['expense-date__day'])}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
