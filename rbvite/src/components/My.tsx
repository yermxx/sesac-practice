import { Session } from '../App';

type Props = {
  session: Session;
};

export default function My({ session }: Props) {
  return (
    <>
      <h1>{session.loginUser?.name} Logined</h1>
    </>
  );
}
