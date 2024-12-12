import Link from 'next/link';

export default function Hello({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const { q } = searchParams;
  return (
    <>
      <h1>Hello</h1>
      <Link href='/' scroll={false} type='button'>
        Dashboard : {q}
      </Link>
    </>
  );
}
