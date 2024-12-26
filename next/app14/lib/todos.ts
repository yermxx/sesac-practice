const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export type Todo = {
  useId: number;
  id: number;
  title: string;
  completed: boolean;
};

// SSG
export default async function getTodos(userId: number = 1) {
  const data = await fetch(`${BASE_URL}/todos?userId=${userId}`, {
    next: { revalidate: 10 },
    // cache: 'force-cache', // 같은 URL이면 다시 부르지 않음!
  }).then((res) => res.json());
  return data as Todo[];
}
