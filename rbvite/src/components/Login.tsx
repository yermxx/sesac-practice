import { FormEvent, useState } from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';

export default function Login({ login }: { login: () => void }) {
  // useState 사용
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !name) {
      alert('Input the id & name !!');
      return;
    }
    login(id, name);
  };

  // const signIn = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const eles = e.currentTarget.elements;
  //   const { id, name } = eles as typeof eles & {
  //     id: HTMLInputElement;
  //     name: HTMLInputElement;
  //   };
  //   console.log('$$', id, name, eles);

  //   if (!id.value || !name.value) {
  //     alert('Input the id & name !!');
  //     id.focus();
  //     return;
  //   }

  //   login(+id.value, name.value);
  // };

  return (
    <form onSubmit={signIn} className='border p-4'>
      <LabelInput
        label='ID'
        type='number'
        onChange={(e) => setId(+e.currentTarget.value)}
        classNames='border border-spacing-6 border-blue-300 mb-2'
      />
      <LabelInput
        label='Name'
        type='text'
        onChange={(e) => setName(e.currentTarget.value)}
        classNames='border border-spacing-6 border-blue-300 mb-2'
      />
      <Button
        text='Sign in'
        variant='btn-success'
        classNames='float-end mt-3'
      />
      {/* <div className='grid place-items-center mb-6'>
        <label htmlFor='id' className='w-24'>
          ID
        </label>
        <input
          className='border border-spacing-6 border-blue-300 mb-2'
          type='number'
          id='id'
          autoComplete='off'
          // onChange={(e) => setId(+e.currentTarget.value)}
        /> */}
      {/* <div className='grid place-items-center mb-6'>
        Name
        <input
          className='border border-spacing-6 border-blue-300 mb-4'
          type='text'
          id='name'
          autoComplete='off'
          // onChange={(e) => setName(+e.currentTarget.value)}
        />
        <Button text='Sign in' variant='btn-success' />
      </div> */}
    </form>
  );
}
