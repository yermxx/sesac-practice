import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='flex justify-around shadow mb-5'>
      <Link href='/'>Home</Link>
      <Link href='/hello'>Hello</Link>
      <Link href='/about'>About</Link>
    </nav>
  );
}
