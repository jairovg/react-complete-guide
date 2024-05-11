import type { ElementType, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
  buttons: ReactNode;
  ButtonsContainer?: ElementType;
}

export default function Tabs({
  children,
  buttons,
  ButtonsContainer = 'menu',
}: TabsProps): React.JSX.Element {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
