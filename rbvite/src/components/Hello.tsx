import { useState } from 'react';

type TitleProps = {
  text: string;
  name: string;
  age: number;
};

const Title = ({ text, name, age }: TitleProps) => (
  <h1>
    {text} {name} ({age})
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
    <>
      <Title text='Hello,' name={name} age={age} />
      <button
        onClick={() => {
          setState(myState + 1);
          plusCount();
        }}
      >
        Plus
      </button>
      <strong>{count}</strong>
      <button onClick={() => minusCount()}>Minus</button>
    </>
  );
}
