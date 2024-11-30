import { useState } from 'react';

// export const useToggle = () => {
//   const [isShow, setShow] = useState(false);
//   const toggle = () => setShow((pre) => !pre);

//   return [isShow, toggle] as const; // tuple 형태로 return
// };

// 기본값 설정 ver
export const useToggle = (defVal: boolean = false) => {
  const [state, setState] = useState(defVal);
  const toggle = (forceState?: unknown) =>
    setState((pre) => (typeof forceState === 'boolean' ? forceState : !pre));

  return [state, toggle] as const;
};
