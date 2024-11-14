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

      <ul>
        {session.cart.map(({ id, name, price }) => (
          <li key={id}>
            {name} <small>{price.toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
