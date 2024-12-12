// generateStaticParams(): 동적 경로여도 미리 페이지를 만들어줌
export function generateStaticParams() {
  return ['morning', 'afternoon', 'evening', 'night'].map((time) => ({
    time,
  }));
}

export default function Time({
  params: { time },
  searchParams: { q },
}: {
  params: { time: string };
  searchParams: { q: string };
}) {
  return (
    <p className='capitalize'>
      Good {time}!
      <span className='normal-case text-green-600 font-bold'>{q}</span>
    </p>
  );
}
