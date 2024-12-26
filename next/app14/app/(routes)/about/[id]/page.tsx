import getTodos from '@/lib/todos';

// export const dynamic = 'auto';
// export const dynamic = 'force-dynamic'; // SSR -> todo를 저장해두지 않고 그때그때 가져옴!!

// export const dynamic = 'force-static'; // SSG
export async function generateStaticParams() {
  return (await getTodos(1)).map(({ id }) => ({
    id: id.toString(),
  }));
}

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
