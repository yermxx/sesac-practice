import { PropsWithChildren, Suspense } from 'react';

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <div className='border p-5'>
      <h1 className='text-2xl '>About Layout</h1>
      <a href='/about/me'>Me</a> | <a href='/about/1'>Todo</a>
      <div className='bg-purple-100'>
        <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
      </div>
    </div>
  );
}
