import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function Profile({ session, logout }: Props) {
  return (
    <>
      <h3 className='mb-2 text-blue-800'>{session.loginUser?.name} Logined</h3>
      <button className='btn btn-success mb-6' onClick={logout}>
        Log-out
      </button>
    </>
  );
}
