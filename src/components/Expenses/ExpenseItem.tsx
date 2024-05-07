import clsx from 'clsx';
import styles from './ExpenseItem.module.scss';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import type { Expense } from '../../types';

function ExpenseItem({ date, title, amount }: Expense): React.JSX.Element {
  return (
    <Card className={clsx(styles['expense-item'])}>
      <ExpenseDate date={date} />
      <div className={clsx(styles['expense-item__description'])}>
        <h2>{title}</h2>
        <div className={clsx(styles['expense-item__price'])}>${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
