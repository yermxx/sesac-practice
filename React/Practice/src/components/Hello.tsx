type Props = {
  name: string;
  age: number;
};

export default function Hello({ name, age }: Props) {
  return (
    <div className='font-bold'>
      Hello, {name}! <small className='font-medium text-red-500'>({age})</small>
    </div>
  );
}
