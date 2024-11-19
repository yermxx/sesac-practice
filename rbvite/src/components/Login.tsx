import { useState, ChangeEvent, FormEvent } from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';
import { LoginUser } from '../App';

type Props = {
  login: ({ id, name }: LoginUser) => void;
};

// 1. useState 사용
export default function Login({ login }: Props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  const changeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(+e.currentTarget.value);
  };
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !name) {
      alert('Input the id & name !!');
      return;
    }
    login({ id, name });
  };

  return (
    <form onSubmit={submitHandler} className='mb-6 border p-4'>
      <LabelInput
        label='ID'
        type='number'
        onChange={changeId} // LableInput 컴포넌트에 변화가 일어날 때
        className='mb-2 border-spacing-6 border border-blue-300'
      />
      <LabelInput
        label='Name'
        type='text'
        onChange={changeName}
        className='mb-2 border-spacing-6 border border-blue-300'
      />
      <Button className='btn-success float-end mt-3'>Sign in</Button>
    </form>
  );
}

// 2. no useState !!
// export default function Login({ login }: Props) {
//   const signIn = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const eles = e.currentTarget.elements;
//     const { id, name } = eles as typeof eles & {
//       id: HTMLInputElement;
//       name: HTMLInputElement;
//     };
//     console.log('$$', id, name, eles);

//     if (!id.value || !name.value) {
//       alert('Input the id & name !!');
//       id.focus();
//       return;
//     }

//     login({ id: +id.value, name: name.value });
//   };

//   return (
//     <form onSubmit={signIn} className='mb-6 border p-4'>
//       <div className='mb-6 grid place-items-center'>
//         <label htmlFor='id' className='w-32'>
//           ID
//         </label>
//         <input
//           className='mb-2 border-spacing-6 border border-blue-300'
//           type='number'
//           id='id'
//           autoComplete='off'
//         />
//       </div>
//       <div className='grid place-items-center'>
//         <label htmlFor='name' className='w-32'>
//           Name
//         </label>
//         <input
//           className='mb-6 border-spacing-6 border border-blue-300'
//           type='text'
//           id='name'
//           autoComplete='off'
//         />
//       </div>
//       <Button className='btn-success float-end mt-3'>Sign in</Button>
//     </form>
//   );
// }
