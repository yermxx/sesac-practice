export default function Time({
  params: { time, cmt },
}: {
  params: { time: string; cmt: string };
}) {
  return (
    <p className='capitalize'>
      Good {time} - comment :
      <span className='normal-case text-red-600 font-bold'> {cmt}</span>
    </p>
  );
}
