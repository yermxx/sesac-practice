import { Session } from '../App';
import Profile from './Profile';
import Login from './Login';

type Props = {
  session: Session;
  logout: () => void;
  // login: (id: number, name: string) => void;
  login: () => void;
};

export default function My({ session, logout, login }: Props) {
  return (
    <>
      {session.loginUser?.id ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <ul className='border my-3 mb-6 p-3 w-1/3'>
        {session.cart.map(({ id, name, price }) => (
          <li className='text-sm mb-1' key={id}>
            * {name} : {price.toLocaleString()}
          </li>
        ))}
      </ul>
    </>
  );
}
