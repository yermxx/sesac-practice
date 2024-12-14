export default function HiTimeIntercept({
  params: { time },
}: {
  params: { time: string };
}) {
  return (
    <div>
      <h2 className='text-2xl'>Hi/{time} - INTERCEPT</h2>
      {/* <a href='/hi/morning'>Real Morning</a> */}
    </div>
  );
}
