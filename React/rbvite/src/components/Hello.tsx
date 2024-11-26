import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import { useCounter } from '../hooks/counter-hook';
import { useSession } from '../hooks/session-context';

type TitleProps = {
  text: string;
  name?: string;
  age: number;
};

const Title = ({ text, name, age }: TitleProps) => (
  <h1 className='mb-2 text-2xl font-bold leading-normal'>
    {text} {name} <small className='text-xs text-red-500'>({age})</small>
  </h1>
);

type Props = {
  age: number;
};

export type MyHandler = {
  jumpHelloState: () => void;
};

function Hello({ age }: Props, ref: ForwardedRef<MyHandler>) {
  const {
    session: { loginUser },
  } = useSession();
  const { count, plusCount, minusCount } = useCounter();
  const [myState, setMyState] = useState(0);

  const handler = {
    jumpHelloState: () => setMyState((pre) => pre * 10),
  };
  useImperativeHandle(ref, () => handler);

  return (
    <div className='mb-7 text-center'>
      <Title text='Hello,' name={loginUser?.name} age={age} />
      <div className='border p-5'>
        <button
          className='btn text-blue-500'
          onClick={() => {
            setMyState(myState + 1);
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

const ImpHello = forwardRef(Hello);

export default ImpHello;
