import { Session } from '../App';
import Profile from './Profile';
import Login from './Login';

type Props = {
  session: Session;
  logout: () => void;
};

export default function My({ session, logout }: Props) {
  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login />
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
