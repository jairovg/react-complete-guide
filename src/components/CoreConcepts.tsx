import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts(): React.JSX.Element {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={conceptItem.title}
            image={conceptItem.image}
            title={conceptItem.title}
            description={conceptItem.description}
          />
        ))}
      </ul>
    </section>
  );
}
