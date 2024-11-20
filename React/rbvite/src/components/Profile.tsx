import { ForwardedRef, forwardRef } from 'react';
import { Session } from '../App';

type Props = {
  session: Session;
  logout: () => void;
};

const Profile = forwardRef(
  ({ session, logout }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <div className='mb-2 border px-5 py-2'>
        <h3 className='mb-2 text-blue-800'>
          {session.loginUser?.name} Logined
        </h3>
        <button onClick={logout} ref={ref} className='btn btn-success mb-6'>
          Log-out
        </button>
      </div>
    );
  }
);

Profile.displayName = 'Profile'; // 이걸 써줘야 Profile이 컴포넌트라고 인식한다

export default Profile;
