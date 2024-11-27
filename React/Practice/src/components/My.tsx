import { type LoginUser, type Session } from '../App';
import Login from './Login';
import Profile from './Profile';
import { PiTrashDuotone } from 'react-icons/pi';
import Button from './ui/Button';

type Props = {
  session: Session;
  logout: () => void;
  login: (user: LoginUser) => void;
  removeCartItem: (itemId: number) => void;
};

export default function My({ session, logout, login, removeCartItem }: Props) {
  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <div className='flex items-center justify-center font-mono text-sm'>
        <ul className='w-1/3 border p-4'>
          {session.cart?.length ? (
            session.cart.map(({ id, name, price }) => (
              <li key={id} className='mb-1 flex justify-between'>
                <span>
                  * {name}: <small className='text-gray-500'>{price}원</small>
                </span>
                <Button onClick={() => removeCartItem(id)}>
                  <PiTrashDuotone />
                </Button>
              </li>
            ))
          ) : (
            <li>아이템이 없습니다!</li>
          )}
        </ul>
      </div>
    </>
  );
}
