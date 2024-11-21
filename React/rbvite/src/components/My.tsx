import { type CartItem, Session } from '../App';
import Profile from './Profile';
import Login, { type LoginHandler } from './Login';
import Button from './atoms/Button';
import { FaPlus, FaTrashCan } from 'react-icons/fa6';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { RiEmotionSadLine } from 'react-icons/ri';
import CartItemEditor from './CartItemEditor';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  removeCartItem: (id: number) => void;
  // addCartItem: (name: string, price: number) => void;
  saveCartItem: (cartItem: CartItem) => void;
};

const My = forwardRef(
  (
    { session, logout, login, saveCartItem, removeCartItem }: Props,
    ref: ForwardedRef<LoginHandler>
  ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cartItem, setCartItem] = useState<CartItem | null>(null);
    // const { id, name } = session.loginUser || { id: 0, name: '' };

    const logoutButtonRef = useRef<HTMLButtonElement>(null);

    const toggleEditing = () => setIsEditing((pre) => !pre);

    const setItem = (item: CartItem) => {
      toggleEditing();
      setCartItem(item);
    };

    return (
      <>
        {session.loginUser?.id ? (
          <div className='flex'>
            <Profile session={session} logout={logout} ref={logoutButtonRef} />
            <Button
              onClick={() => logoutButtonRef.current?.focus()}
              className='mb-4'
            >
              MySignOut
            </Button>
          </div>
        ) : (
          <Login login={login} ref={ref} />
        )}

        <ul className='mb-6 w-auto space-y-3 border p-4'>
          {session.cart?.length ? (
            session.cart.map(({ id, name, price }) => (
              <li key={id} className='grid grid-cols-3 justify-around'>
                <span className='col-span-2 whitespace-pre font-mono'>
                  * {name.padEnd(8)}: <small>{price.toLocaleString()}원</small>
                </span>
                <div className='grow-1 flex'>
                  <Button
                    onClick={() => setItem({ id, name, price })}
                    className='mx-5 ml-auto'
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => removeCartItem(id)}
                    className='mx-5 ml-auto'
                  >
                    <FaTrashCan />
                  </Button>
                </div>
              </li>
            ))
          ) : (
            <li className='text-slate-500'>
              <div className='flex items-center justify-center'>
                There is no items..
                <RiEmotionSadLine />
              </div>
            </li>
          )}
          <li className='mt-3 text-center'>
            {isEditing ? (
              <CartItemEditor
                cartItem={cartItem}
                saveCartItem={saveCartItem}
                toggleEditing={toggleEditing}
              />
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
);

My.displayName = 'My';

export default My;
