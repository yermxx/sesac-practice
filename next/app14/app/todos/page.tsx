import Link from 'next/link';
import { getTodo } from '@/lib/todos';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return (await getTodo(1)).map(({ id }) => ({
    id: id.toString(),
  }));
}

export default async function TodoList({
  params: { id },
}: {
  params: { id: string };
}) {
  const todos = await getTodo(1);
  if (!todos) {
    return <h1 className='text-2xl text-red-500'>#{id} is not found!!</h1>;
  }

  return (
    <>
      <h1 className='text-bold text-2xl mb-3 bg-red-200'>Todo-list</h1>
      <ul className='border border-black p-2'>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Link href={`/todos/${todo.id}`}>
                #{todo.id}: {todo.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
