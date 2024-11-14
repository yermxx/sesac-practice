import { FormEvent } from 'react';

export default function Login({ login }: { login: () => void }) {
  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eles = e.currentTarget.elements;
    const { id, name } = eles as typeof eles & {
      id: HTMLInputElement;
      name: HTMLInputElement;
    };
    console.log('$$', id, name, eles);

    if (!id.value || !name.value) {
      alert('Input the id & name !!');
      id.focus();
      return;
    }

    login(+id.value, name.value);
  };

  return (
    <>
      <form onSubmit={signIn}>
        ID:
        <input
          type='number'
          id='id'
          // onChange={(e) => setId(+e.currentTarget.value)}
        />
        Name:{' '}
        <input
          type='text'
          id='name'
          // onChange={(e) => setName(+e.currentTarget.value)}
        />
        <button>Sign in</button>
      </form>
    </>
  );
}
