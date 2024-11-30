import { useEffect } from 'react';

// type safety !!
export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  useEffect(() => {
    const timer = setTimeout(cb, delay, ...args);
    return () => clearTimeout(timer);
  }, [cb, delay, args]);
};

export const useInterval = <T extends (...args: unknown[]) => void>(
  cb: T,
  delay: number,
  ...args: Parameters<T>
) => {
  useEffect(() => {
    const intl = setInterval(cb, delay, ...args);
    return () => clearInterval(intl);
  }, [args, cb, delay]);
};

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
