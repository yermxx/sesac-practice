import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useId,
} from 'react';
import Input from '../atoms/Input';

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // ref?: RefObject<HTMLInputElement> | null;
  classNames?: string;
  inputAttrs?: InputHTMLAttributes<HTMLInputElement>;
};

function LabelInput(
  {
    label,
    type = 'text',
    placeholder = `${label}...`,
    onChange = () => {},
    // ref = null,
    classNames = '',
    ...inputAttrs
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
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
        className={`inp ${classNames}`}
        onChange={onChange}
        ref={ref}
        {...inputAttrs}
      />
    </div>
  );
}

const LabelInputRef = forwardRef(LabelInput);

export default LabelInputRef;
