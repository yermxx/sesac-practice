import { useEffect } from 'react';

export const useTimeout = (cb: () => void, delay: number) => {
  useEffect(() => {
    const intl = setTimeout(cb, delay);
    return () => clearInterval(intl);
  }, [cb, delay]);
};

export const useInterval = <T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number,
  ...args: T
) => {
  useEffect(() => {
    const intl = setInterval(cb, delay, ...args);
    return () => clearInterval(intl);
  }, [args, cb, delay]);
};
