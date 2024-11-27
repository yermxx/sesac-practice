import { ReactNode } from 'react';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

export default function Button({
  type,
  onClick = () => {},
  className = '',
  children,
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}
