import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

export default function My({ session, logout }: Props) {
  return (
    <>
      <div className='mb-3 flex items-center justify-center gap-3 p-4'>
        <h3 className='rounded-md border p-1'>
          {session.loginUser?.name} Logined
        </h3>
        <button onClick={logout} className='btn btn-success'>
          Logout
        </button>
      </div>

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
