import type { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
}

export default function Section({
  title,
  children,
  id,
}: SectionProps): React.JSX.Element {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
