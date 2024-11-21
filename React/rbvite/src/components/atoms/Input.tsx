import { ChangeEvent, forwardRef } from 'react';

type Props = {
  type?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: number | string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`ring-1x rounded-md border px-2 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
