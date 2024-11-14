import { ChangeEvent, useId } from 'react';

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  classNames?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LabelInput({
  label,
  type = 'text',
  placeholder = `${label} ...`,
  classNames = '',
  onChange = () => {},
}: Props) {
  const id = useId();

  return (
    <div className='grid place-items-center mb-6'>
      <label htmlFor={id} className='w-32'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`inp ${classNames}`}
        onChange={onChange}
        autoComplete='off'
      />
    </div>
  );
}
