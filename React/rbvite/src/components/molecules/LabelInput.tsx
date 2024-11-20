import { ChangeEvent, useId } from 'react';
import Input from '../atoms/Input';

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LabelInput({
  label,
  type = 'text',
  placeholder = `${label} ...`,
  className = '',
  onChange = () => {},
}: Props) {
  const id = useId();

  return (
    <div className='mb-6 grid place-items-center'>
      <label htmlFor={id} className='w-32'>
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete='off'
      />
    </div>
  );
}
