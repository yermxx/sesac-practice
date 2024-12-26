'use client';

import { useEffect, useState } from 'react';

export default function CSR() {
  console.log('CSR!!!!!!!!!!!');
  const dt = new Date().toString();
  const [dtStr, setDtStr] = useState('');
  useEffect(() => setDtStr(dt), [dt]);
  return <h1>This is About Page!! {dtStr}</h1>;
}
