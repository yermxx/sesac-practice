import { useEffect, useRef } from 'react';

// useRef 사용
export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);
  useEffect(() => {
    const timer = setTimeout(cbRef.current, delay, ...argsRef.current);
    return () => clearTimeout(timer);
  }, [delay]);
};

export const useInterval = <
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);
  useEffect(() => {
    const timer = setInterval(cbRef.current, delay, ...argsRef.current);
    return () => clearInterval(timer);
  }, [delay]);
};

// type safety !!
// export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   useEffect(() => {
//     const timer = setTimeout(cb, delay, ...args);
//     return () => clearTimeout(timer);
//   }, [cb, delay, args]);
// };

// export const useInterval = <
//   T extends (...args: Parameters<T>) => ReturnType<T>,
// >(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   useEffect(() => {
//     const timer = setInterval(cb, delay, ...args);
//     return () => clearInterval(timer);
//   }, [cb, delay, args]);
// };

// export const useTimeout = (cb: () => void, delay: number) => {
//   useEffect(() => {
//     const intl = setTimeout(cb, delay);
//     return () => clearInterval(intl);
//   }, [cb, delay]);
// };

// export const useInterval = <T extends unknown[]>(
//   cb: (...args: T) => void,
//   delay: number,
//   ...args: T
// ) => {
//   useEffect(() => {
//     const intl = setInterval(cb, delay, ...args);
//     return () => clearInterval(intl);
//   }, [args, cb, delay]);
// };
