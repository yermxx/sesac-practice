import getTodos from '@/lib/todos';

export default async function AboutTodo({
  params: { id },
}: {
  params: { id: string };
}) {
  const todos = await getTodos(1);
  const todo = todos.find((td) => td.id === +id);
  // 에러 처리
  if (!todo) {
    return <h1 className='text-2xl text-red-500'>#{id} is not found!!</h1>;
  }

  return (
    <>
      <h1 className='text-2xl'>About Todo #{id}</h1>
      <strong
        className={`${todo.completed ? 'line-through' : 'font-extrabold'} text-xl`}
      >
        title: {todo.title}
      </strong>
    </>
  );
}
