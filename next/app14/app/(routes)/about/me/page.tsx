'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Me() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goBack = () => router.back();
  const goHello = () => router.push('/hello', { scroll: false });

  // 보통은 custom-hook을 만들어서 사용
  const changeSearchParams = (x: string) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    urlSearchParams.set('xxx', x);
    // console.log('urlSearchParams', urlSearchParams.toString());
    router.push(`${pathname}?${urlSearchParams.toString()}`); // router.push를 해야지만 url창에 반영됨
  };

  return (
    <div className='text-center'>
      <div className='flex gap-3'>
        <button onClick={goBack}>Back</button>
        <button onClick={goHello}>Hello</button>
        <button onClick={() => changeSearchParams('999')}>change-xxx</button>
      </div>
      <span>
        Me Page: {pathname}?xxx={searchParams.get('xxx')}
      </span>
    </div>
  );
}
