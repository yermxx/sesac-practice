import { ReactNode } from 'react';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

export default function Button({
  type,
  children,
  onClick = () => {},
  className = '',
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className} mb-3 flex items-center justify-center normal-case`}
    >
      {children}
    </button>
  );
}
