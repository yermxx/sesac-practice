import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

const contextInitValue = {
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
};

type CounterContextProps = typeof contextInitValue;

const CounterContext = createContext<CounterContextProps>(contextInitValue);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0); // provider가 상태를 갖고 있음

  // Provider가 리렌더링될 때마다 새로운 함수가 생성(재할당)됨 => 성능 이슈 발생!! => useCallback() 사용
  // const plusCount = () => setCount(count + 1);
  const plusCount = useCallback(() => {
    setCount((pre) => {
      const newer = pre + 1;
      return newer;
    });
  }, []);
  const minusCount = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// 두 개의 컴포넌트를 export 해줄 수 없으니 한 줄만 eslint 규칙을 일시적으로 비활성화
// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => useContext(CounterContext);
