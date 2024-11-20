import { ChangeEvent } from 'react';

type Props = {
  type?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: number | string;
};

export default function Input({
  type = 'text',
  id,
  onChange,
  placeholder,
  value,
}: Props) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className='ring-1x rounded-md border px-2'
    />
  );
}
