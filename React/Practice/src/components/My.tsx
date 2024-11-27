import { type LoginUser, type Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  logout: () => void;
  login: (user: LoginUser) => void;
};

export default function My({ session, logout, login }: Props) {
  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <div className='flex items-center justify-center'>
        <ul className='w-1/3 border p-4'>
          {session.cart.map(({ id, name, price }) => (
            <li key={id}>
              * {name}: <small>{price}원</small>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
