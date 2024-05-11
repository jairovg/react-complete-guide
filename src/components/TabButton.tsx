import type { HTMLAttributes, ReactNode } from 'react';

interface TabButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelected: boolean;
}

export default function TabButton({
  children,
  isSelected,
  ...props
}: TabButtonProps): React.JSX.Element {
  return (
    <li>
      <button
        type="button"
        className={isSelected ? 'active' : undefined}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
