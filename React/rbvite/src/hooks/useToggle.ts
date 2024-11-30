import { useState } from 'react';

export const useToggle = () => {
  const [isShow, setShow] = useState(false);
  const toggle = () => setShow((pre) => !pre);

  return [isShow, toggle] as const; // tuple 형태로 return
};
