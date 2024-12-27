import Link from 'next/link';
import { getTodolist } from '@/lib/todos';

export const revalidate = 5;

export default async function Todo({
  params: { todoId },
}: {
  params: { todoId: string };
}) {
  const { title, completed } = await getTodolist(+todoId);
  if (!todoId) {
    return <h1 className='text-2xl text-red-500'>#{todoId} is not found!!</h1>;
  }

  return (
    <div className='text-left'>
      <h1 className='text-bold text-2xl mb-3 bg-purple-200'>#{todoId} Todo</h1>
      <p className='mb-2 text-xl'>
        <span className='font-bold'>title: </span>
        {title}
      </p>
      <hr className='mb-2' />
      <p className='mb-5 text-xl'>
        <span className='font-bold'>completed: </span>
        {completed ? 'Done' : 'Doing...'}
      </p>
      <div className='flex justify-end'>
        <Link className='border rounded-lg p-2' href='/todos'>
          Back
        </Link>
      </div>
    </div>
  );
}
