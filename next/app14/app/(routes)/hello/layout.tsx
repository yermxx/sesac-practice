import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  return (
    <div className='border p-5'>
      <h1 className='text-2xl'>Hello Layout</h1>
      <div className='flex gap-2'>
        <Link href='/hello/morning'>Morning</Link>
        <Link href='/hello/afternoon'>Afternoon</Link>
        <Link href='/hello/evening'>Evening</Link>
      </div>
      <div className='bg-purple-100 text-center'>{children}</div>
    </div>
  );
}
