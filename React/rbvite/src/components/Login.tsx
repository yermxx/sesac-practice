import {
  FormEvent,
  useRef,
  useImperativeHandle,
  useEffect,
  useLayoutEffect,
} from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';
import { useSession } from '../hooks/session-context';
import { useCounter } from '../hooks/counter-hook';
import { useInterval, useTimeout } from '../hooks/timer-hooks';

export type LoginHandler = {
  focus: (prop: string) => void;
};

export default function Login() {
  const { login, loginRef } = useSession();
  const { count, plusCount, minusCount } = useCounter();

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handler: LoginHandler = {
    focus(prop) {
      if (prop === 'id') idRef.current?.focus();
      if (prop === 'name') nameRef.current?.focus();
    },
  };
  useImperativeHandle(loginRef, () => handler);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value ?? 0;
    const name = nameRef.current?.value ?? '';
    login(+id, name);
  };

  // useEffect(() => {
  //   const intl = setTimeout((x) => console.log('xxx', x), 500, 123);

  //   return () => clearTimeout(intl);
  // }, []);
  // useTimeout((x: number, y: number) => console.log('xxx', x, y), 500, 123, 456);

  // useInterval(() => console.log('interval!!'), 1000);
  console.log('*****', new Date().getSeconds());
  useInterval(plusCount, 1500);
  // const f = useCallback(() => { console.log('once?'); }, []);
  const f = () => {
    console.log('once?');
  };
  useTimeout(f, 1000);

  useLayoutEffect(() => {
    // console.log('useLayoutEffect!!');
  }, []);

  useEffect(() => {
    plusCount();
    // console.log('effect', count);

    return () => {
      // console.log('xx');
      minusCount();
    };
  }, [count, plusCount, minusCount]); // 1

  // useEffect(() => {
  //   console.log('useeffffffff22');

  //   return minusCount;
  // }, [minusCount]);

  return (
    <form onSubmit={signIn} className='mb-6 border p-4'>
      <LabelInput
        label='ID'
        type='number'
        classNames='mb-2 border-spacing-6 border border-blue-300'
        ref={idRef}
      />
      <LabelInput
        label='Name'
        type='text'
        classNames='mb-2 border-spacing-6 border border-blue-300'
        ref={nameRef}
      />
      <Button type='submit' className='btn-success float-end mt-3'>
        Sign in
      </Button>
    </form>
  );
}
