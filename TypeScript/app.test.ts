import { fetchUsers, saveUser, deleteUser } from './fetch';

const LEE = { id: 1, name: '훈이', email: 'iamhoon@gmail.com' };
const KIM = { id: 2, name: '철수', email: 'csisgood@gmail.com' };
const KIM2 = { id: 2, name: '흰둥', email: 'white@gmail.com' };

// jest.mock('./fetch', () => ({
//   fetchUsers: () => LEE,
//   saveUser: () => KIM,
// }));

describe('fetch - /users', () => {
  test('users - get', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([LEE]);
  });

  test('users - post', async () => {
    const name = KIM.name;
    const email = KIM.email;
    const user = await saveUser({ name, email, id: 0 });
    expect(user).toEqual(KIM);
  });

  test('users - get', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([LEE, KIM]);
    // expect(users).toBeUndefined();
    // expect(users).toBe(undefined);
  });

  test('users - patch', async () => {
    const name = KIM2.name;
    const email = KIM2.email;
    const user = await saveUser({ name, email, id: 2 });
    expect(user).toEqual(KIM2);
  });

  test('users - afterPatch', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([LEE, KIM2]);
  });

  test('users - delete', async () => {
    const user = await deleteUser(KIM.id);
    expect(user).toEqual({ message: 'OK' });
  });

  test('users - lastGet', async () => {
    const users = await fetchUsers();
    expect(users).toEqual([LEE]);
  });
});
