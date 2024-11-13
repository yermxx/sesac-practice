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

// const Body = ({ children }: { children: ReactNode }) => (
//   <div className='red'>{children}</div>
// );

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
  // let v = 1;
  console.log('*****', myState, count);

  return (
    <>
      <Title text='Hello,' name={name} age={age} />
      {/* <Body>age: ({age})</Body> */}
      <button
        onClick={() => {
          // v++;
          setState(myState + 1);
          plusCount();
          // console.log(v);
        }}
      >
        Plus
      </button>
      <strong>{count}</strong>
      <button onClick={() => minusCount()}>Minus</button>
    </>
  );
}
