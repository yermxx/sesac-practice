import { ChangeEvent } from 'react';

type Props = {
  type?: string;
  id?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  id,
  value,
  placeholder = `${value}...`,
  onChange = () => {},
}: Props) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='ring-1x rounded-md border px-2'
    />
  );
}
