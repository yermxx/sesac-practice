import { useRef, useState } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

// type LoginUser = typeof SampleSession.loginUser;
export type LoginUser = {
  id: number;
  name: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
};

export type Session = {
  loginUser: LoginUser | null;
  cart: CartItem[];
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const myHandleRef = useRef<MyHandler>(null);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = ({ id, name }: LoginUser) =>
    setSession({ ...session, loginUser: { id, name } });

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
    setSession({ ...session, cart: [...session.cart, { id, name, price }] });
  };

  const removeCartItem = (itemId: number) =>
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== itemId),
    });

  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  return (
    <div className='grid place-items-center'>
      <Hello
        name='Rimi!'
        age={29}
        count={count}
        plusCount={plusCount}
        minusCount={minusCount}
        ref={myHandleRef}
      />
      <hr />
      {/* <pre>{JSON.stringify(session.loginUser)}</pre> */}
      <My
        session={session}
        logout={logout}
        addCartItem={addCartItem}
        removeCartItem={removeCartItem}
        login={login}
      />
      <div className='card'>
        <button
          className='btn btn-primary btn-outline-success'
          onClick={() => {
            setCount((count) => count + 1);
            myHandleRef.current?.jumpHelloState();
          }}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
