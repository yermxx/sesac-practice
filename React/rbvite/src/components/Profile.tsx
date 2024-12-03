import { ForwardedRef, forwardRef } from 'react';
import { useSession } from '../hooks/session-context';

const Profile = forwardRef(
  ({ xxx }: { xxx: number }, ref: ForwardedRef<HTMLButtonElement>) => {
    const { session, logout } = useSession();
    console.log('xxx>>>', xxx);
    return (
      <div className='mb-3 px-5 py-2'>
        <button
          onClick={logout}
          ref={ref}
          className='btn btn-primary normal-case'
        >
          {session.loginUser?.name} Sign Out {xxx}
        </button>
        {/* <Button onClick={logout} text='SignOut' /> */}
      </div>
    );
  }
);

Profile.displayName = 'Profile'; // 이걸 써줘야 Profile이 컴포넌트라고 인식한다

export default Profile;
