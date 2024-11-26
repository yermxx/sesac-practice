import { ForwardedRef, forwardRef } from 'react';
import Button from './atoms/Button';
import { useSession } from '../hooks/session-context';

const Profile = forwardRef(
  (_: unknown, ref: ForwardedRef<HTMLButtonElement>) => {
    const { session, logout } = useSession();
    return (
      <div className='mb-2 px-5 py-2'>
        <h3 className='mb-2 text-center text-blue-800'>
          {session.loginUser?.name} Logined
        </h3>
        <Button onClick={logout} ref={ref} className='btn btn-success mb-6'>
          HongSignOut
        </Button>
      </div>
    );
  }
);

Profile.displayName = 'Profile'; // 이걸 써줘야 Profile이 컴포넌트라고 인식한다

export default Profile;
