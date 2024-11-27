import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginUser } from '../App';
import Input from './ui/Input';
import Button from './ui/Button';

type Props = {
  login: (user: LoginUser) => void;
};

export default function Login({ login }: Props) {
  // id, name 정보를 저장할 useState 필요
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  // 이벤트 핸들러 (id, name 입력 처리 / form 제출 처리)
  const changeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(+e.currentTarget.value);
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지

    // 유효성 검사
    if (!id) return alert('ID를 입력해 주세요.');
    else if (!name) return alert('이름을 입력해 주세요.');

    login({ id, name });
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={submitHandler}
        action='submit'
        className='m-3 w-1/3 border p-3'
      >
        <div className='mb-3 flex flex-col'>
          <label
            htmlFor='loginId'
            className='text-left text-sm font-semibold text-gray-500'
          >
            ID
          </label>
          <Input
            type='number'
            id='loginId'
            onChange={changeId}
            value={id || ''} // id만 적어주면 controlled component가 되어 있어서 0이 기본값이 됨
            placeholder='id ...'
          />
        </div>
        <div className='mb-5 flex flex-col'>
          <label
            htmlFor='loginId'
            className='text-left text-sm font-semibold text-gray-500'
          >
            Name
          </label>
          <Input
            type='text'
            onChange={changeName}
            value={name}
            placeholder='name ...'
          />
        </div>
        <Button type='submit' className='btn-check float-right'>
          Sign in
        </Button>
      </form>
    </div>
  );
}
