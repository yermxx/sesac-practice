import { LoginUser, Session } from '../App';
import Profile from './Profile';
import Login from './Login';
import Button from './atoms/Button';
import { FaPlus, FaTrashCan } from 'react-icons/fa6';
import { FormEvent, useRef, useState } from 'react';
import Input from './atoms/Input';
import { TbShoppingCartOff, TbShoppingCartPlus } from 'react-icons/tb';

type Props = {
  session: Session;
  logout: () => void;
  login: ({ id, name }: LoginUser) => void;
  addCartItem: (name: string, price: number) => void;
  removeCartItem: (id: number) => void;
};

export default function My({
  session,
  logout,
  login,
  addCartItem,
  removeCartItem,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  // const { id, name } = session.loginUser || { id: 0, name: '' };

  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const toggleEditing = () => setIsEditing((pre) => !pre);

  const saveItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;

    if (!name) {
      alert('상품명을 입력하세요!');
      return nameRef.current?.focus();
    } else if (!price) {
      alert('상품 가격을 입력하세요!');
      return priceRef.current?.focus();
    }

    addCartItem(name, +price);

    // save한 뒤 input 초기화
    nameRef.current.value = '';
    priceRef.current.value = '';
    nameRef.current?.focus();
  };

  return (
    <>
      {session.loginUser?.id ? (
        <div className='flex'>
          <Profile session={session} logout={logout} ref={logoutButtonRef} />
          <Button
            onClick={() => logoutButtonRef.current?.click()}
            className='mb-4'
          >
            MySignOut
          </Button>
        </div>
      ) : (
        <Login login={login} />
      )}

      <ul className='mb-6 w-auto space-y-3 border p-4'>
        {session.cart?.length ? (
          session.cart.map(({ id, name, price }) => (
            <li key={id} className='grid grid-cols-3 justify-around'>
              <span className='col-span-2 whitespace-pre font-mono'>
                * {name.padEnd(8)}: <small>{price.toLocaleString()}원</small>
              </span>
              <button
                onClick={() => removeCartItem(id)}
                className='mx-5 ml-auto'
              >
                <FaTrashCan />
              </button>
            </li>
          ))
        ) : (
          <li className='text-slate-500'>There is no items.</li>
        )}
        <li className='mt-3 text-center'>
          {isEditing ? (
            // data를 받는 부분은 form
            <form onSubmit={saveItem} className='mt-3 flex gap-3'>
              <Input
                ref={nameRef}
                type='text'
                placeholder='item name...'
                className='mx-2 border'
              />
              <Input ref={priceRef} type='number' placeholder='item price...' />
              <Button type='reset' onClick={toggleEditing}>
                <TbShoppingCartOff />
              </Button>
              <Button type='submit' className='btn-primary'>
                <TbShoppingCartPlus />
              </Button>
            </form>
          ) : (
            // onClick={() => setIsEditing(true)}을 변수로 더 깔끔하게 처리
            <Button onClick={toggleEditing} className='mx-auto'>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>
    </>
  );
}
