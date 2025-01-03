import Link from 'next/link';
import { ReactNode } from 'react';

export default function ParallelLayout({
  children,
  login,
  profile,
}: {
  children: ReactNode;
  login: ReactNode;
  profile: ReactNode;
}) {
  const didLogin = false;

  return (
    <div>
      <h1 className='font-bold'>Parallel Layout</h1>
      <div className='flex gap-3 justify-center'>
        <Link href='/parallel/aaa'>Go to Aaa</Link>
        <Link href='/parallel/bbb'>Go to Bbb</Link>
      </div>
      {didLogin ? (
        <div className='flex justify-between gap-3 mb-2 border p-4'>
          <div className='bg-purple-100'>{login}</div>
          <div className='bg-cyan-100'>{profile}</div>
        </div>
      ) : (
        <div className='bg-purple-100'>{login}</div>
      )}
      {children}
    </div>
  );
}
