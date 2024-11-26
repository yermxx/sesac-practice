import {
  createContext,
  createRef,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from 'react';
import { LoginHandler } from '../components/Login';

const SampleSession = {
  loginUser: { id: 1, name: '홍길동' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

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

const contextInitValue = {
  session: SampleSession,
  logout: () => {},
  login: (id: number, name: string) => {
    console.log('login init', id, name);
  },
  removeCartItem: (id: number) => {
    console.log('removeCartItem init', id);
  },
  saveCartItem: (cartItem: CartItem) => {
    console.log('saveCartItem init', cartItem);
  },
  loginRef: createRef<LoginHandler>(),
};

type SessionContextProps = Omit<typeof contextInitValue, 'session'> & {
  session: Session;
};

const SessionContext = createContext<SessionContextProps>(contextInitValue);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const loginRef = useRef<LoginHandler>(null);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (id: number, name: string) => {
    if (!id) {
      alert('ID를 입력하세요!');
      return loginRef.current?.focus('id');
    }
    if (!name) {
      alert('이름을 입력하세요!');
      return loginRef.current?.focus('name');
    }
    setSession({ ...session, loginUser: { id, name } });
  };

  const saveCartItem = (cartItem: CartItem) => {
    const isAdding = !cartItem.id;
    if (isAdding) {
      cartItem.id = Math.max(...session.cart.map(({ id }) => id)) + 1;
      setSession({ ...session, cart: [...session.cart, cartItem] });
    } else {
      setSession({
        ...session,
        cart: [
          ...session.cart.map((item) =>
            item.id === cartItem.id ? cartItem : item
          ),
        ],
      });
    }
  };

  const removeCartItem = (itemId: number) =>
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== itemId),
    });
  return (
    <SessionContext.Provider
      value={{ session, login, logout, saveCartItem, removeCartItem, loginRef }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);
