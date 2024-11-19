import { LoginUser, Session } from '../App';
import Profile from './Profile';
import Login from './Login';
import Button from './atoms/Button';
import { FaTrashCan } from 'react-icons/fa6';

type Props = {
  session: Session;
  logout: () => void;
  login: ({ id, name }: LoginUser) => void;
  removeCartItem: (id: number) => void;
};

export default function My({ session, logout, login, removeCartItem }: Props) {
  // const { id, name } = session.loginUser || { id: 0, name: '' };

  return (
    <>
      {session.loginUser?.id ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <ul className='mb-6 w-1/3 space-y-3 border p-4'>
        {session.cart.map(({ id, name, price }) => (
          <li key={id} className='grid grid-cols-3 justify-around'>
            <span className='col-span-2'>
              * {name} : {price.toLocaleString()}
            </span>
            <Button onClick={() => removeCartItem(id)} className='py-0'>
              <FaTrashCan />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
