import { useState } from 'react';

type TitleProps = {
  text: string;
  name: string;
  age: number;
};

const Title = ({ text, name, age }: TitleProps) => (
  <h1 className='mb-2 text-2xl font-bold leading-normal'>
    {text} {name} <small className='text-xs text-red-500'>({age})</small>
  </h1>
);

type Props = {
  name: string;
  age: number;
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

export default function Hello({
  name,
  age,
  count,
  plusCount,
  minusCount,
}: Props) {
  const [myState, setState] = useState(0);

  return (
    <div className='mb-7 text-center'>
      <Title text='Hello,' name={name} age={age} />
      <div className='border p-5'>
        <button
          className='btn text-blue-500'
          onClick={() => {
            setState(myState + 1);
            plusCount();
          }}
        >
          Plus
        </button>
        <strong className='mx-5'>{count}</strong>
        <button className='btn text-red-500' onClick={() => minusCount()}>
          Minus
        </button>
      </div>
    </div>
  );
}
