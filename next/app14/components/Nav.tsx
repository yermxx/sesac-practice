import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='flex justify-around shadow mb-7'>
      <Link href='/'>Home</Link>
      <Link href='/hello'>Hello</Link>
      <Link href='/hi'>Hi</Link>
      <Link href='/shop/aaa'>Shop</Link>
      <Link href='/parallel'>Parallel</Link>
      <Link href='/intercept'>Intercept</Link>
      <Link href='/about'>About</Link>
    </nav>
  );
}
