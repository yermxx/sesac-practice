import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function Profile({ session, logout }: Props) {
  return (
    <>
      <h3>{session.loginUser?.name} Logined</h3>
      <button onClick={logout}>Log-out</button>
    </>
  );
}
