/* eslint-disable react-refresh/only-export-components */
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

  // const minusCount = () => setCount(count - 1);
  const minusCount = useCallback(() => {
    setCount((pre) => {
      const newer = pre - 1;
      return newer;
    });
  }, []);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// 두 개의 컴포넌트를 export 해줄 수 없으니 한 줄만 eslint 규칙을 일시적으로 비활성화
// useCounter : 전역에서 사용
export const useCounter = () => useContext(CounterContext);

// export const useCount = () => {
//   const [count, setCount] = useState(0);
//   const plusCount = () => setCount((count) => count + 1);
//   const minusCount = () => setCount((count) => count - 1);

//   return [count, plusCount, minusCount];
// };

// 기본값 지정
export const useCount = (defVal = 0) => {
  const [count, setCount] = useState(defVal);
  const plusCount = (flag = 1) => setCount((pre) => pre + flag);
  const minusCount = (flag = 1) => setCount((pre) => pre - flag);

  return [count, plusCount, minusCount];
};
