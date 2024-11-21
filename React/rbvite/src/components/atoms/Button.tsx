import { ReactNode } from 'react';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  type = 'button',
  children,
  onClick = () => {},
  className = '',
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn flex items-center justify-center normal-case ${className}`}
    >
      {children}
    </button>
  );
}
