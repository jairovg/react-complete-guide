import clsx from 'clsx';
import reactImg from '../../assets/react-core-concepts.png';
import styles from './Header.module.scss';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(): React.JSX.Element {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header className={clsx(styles.header)}>
      <img
        src={reactImg}
        alt="Stylized atom"
      />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
