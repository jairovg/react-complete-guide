import type { Concept } from '../types';

export default function CoreConcept({
  image,
  title,
  description,
}: Concept): React.JSX.Element {
  return (
    <li>
      <img
        src={image}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
